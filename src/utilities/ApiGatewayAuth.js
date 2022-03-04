import axios from 'axios';
import qs from 'qs';

export class ApiGatewayAuth {
  constructor(config = {}) {
    this.url = config.url || process.env.API_GATEWAY_AUTH_URL;
    this.clientId = config.clientId || process.env.API_GATEWAY_AUTH_CLIENT_ID;
    this.clientSecret =
      config.clientSecret || process.env.API_GATEWAY_AUTH_CLIENT_SECRET;
    this.token = config.token || false;
    this.grantType = 'client_credentials';
  }

  isAuthenticated = () => !!this.token;

  authenticate = async () => {
    const body = {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: this.grantType,
    };
    const result = await axios.post(this.url, qs.stringify(body), {
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    });
    this.token = result.data;
    return this.token;
  };
}
