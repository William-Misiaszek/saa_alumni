const serverless = require('serverless-http');
const { AdaptAuth } = require('adapt-auth-sdk');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const getSiteUrl = require('../src/utilities/getSiteUrl');

// Automatically set origin, if not passed explicitly.
const siteUrl = getSiteUrl();
const authInstance = new AdaptAuth({
  saml: {
    serviceProviderLoginUrl: process.env.ADAPT_AUTH_SAML_SP_URL,
    entity: process.env.ADAPT_AUTH_SAML_ENTITY || 'adapt-sso-uat',
    cert: process.env.ADAPT_AUTH_SAML_CERT,
    decryptionKey: process.env.ADAPT_AUTH_SAML_DECRYPTION_KEY,
    returnTo: process.env.ADAPT_AUTH_SAML_RETURN_URL,
    returnToOrigin: siteUrl,
    returnToPath: process.env.ADAPT_AUTH_SAML_RETURN_PATH,
  },
  session: {
    secret: process.env.ADAPT_AUTH_SESSION_SECRET,
    name: process.env.ADAPT_AUTH_SESSION_NAME || 'adapt-auth',
    expiresIn: process.env.ADAPT_AUTH_SESSION_EXPIRES_IN || '12h',
    loginRedirectUrl: process.env.ADAPT_AUTH_SESSION_LOGIN_URL || '/',
    unauthorizedRedirectUrl: process.env.ADAPT_AUTH_SESSION_UNAUTHORIZED_URL,
  },
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/api/auth/login', authInstance.initiate());
app.get('/api/auth/logout', authInstance.destroySession());
app.get('/api/auth/session', authInstance.authorize(), (req, res, next) => {
  res.json(req.user);
});
app.post('/api/auth/callback', authInstance.authenticate(), (req, res) => {
  const redirectUrl = req.samlRelayState.finalDestination || '/';
  res.redirect(redirectUrl);
});

exports.handler = serverless(app);
