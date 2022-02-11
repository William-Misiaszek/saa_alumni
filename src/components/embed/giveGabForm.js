/* eslint-disable camelcase */
import React, { useContext } from 'react';
import nextId from 'react-id-generator';
import { Helmet } from 'react-helmet';
import SbEditable from 'storyblok-react';
import ClipLoader from 'react-spinners/ClipLoader';
import { Container } from '../layout/Container';
import Embed from './embed';
import DynaScript from './dynaScript';
import setGiveGabVars from '../../utilities/giveGabVars';
// TODO: Import user auth information from AuthContext.js
import AuthContext from '../../contexts/AuthContext';

// Give Gab Form Component
// -----------------------------------------------------------------------------
const GiveGabForm = ({
  blok: {
    css_styles,
    head_js,
    pre_markup,
    url,
    post_markup,
    trip_id,
    trip_name,
    extension,
    extension_amount,
  },
  blok,
}) => {
  const htmlId = nextId('su-givegab-');
  const { user, isAuthenticated, isAuthenticating } = useContext(AuthContext);
  const preBlok = { markup: pre_markup };
  const postBlok = { markup: post_markup };
  const ggForm = { trip_id, trip_name, extension, extension_amount };

  if (isAuthenticating) {
    return (
      <div
        aria-live="polite"
        aria-busy="true"
        className="su-bg-white su-rs-p-5"
      >
        <ClipLoader color="#00BFFF" height={50} width={50} />
        <p>Loading form...</p>
        <noscript>
          Sorry, but you must have Javascript enabled to use the form.
        </noscript>
      </div>
    );
  }

  // If the user is logged in, provide the prefill variables to the window.
  if (isAuthenticated) {
    // TODO: Determine how the trip_id, trip_name, extension, and extension_amount information will be handled
    // TODO: Set the window variables for the pre populated forms.
    console.log(user, ggForm);
    setGiveGabVars(user, ggForm);
  }
  return (
    <SbEditable content={blok}>
      {css_styles && (
        <Helmet>
          <style type="text/css">{css_styles}</style>
        </Helmet>
      )}
      {head_js && (
        <Helmet>
          <script>{head_js}</script>
        </Helmet>
      )}
      <Container
        width="full"
        className="children:su-bg-white children:su-shadow-lg"
      >
        <div className="su-rs-p-5">
          <Embed blok={preBlok} />
          <DynaScript src={url} id={htmlId} />
        </div>
        <div className="su-rs-mt-3 children:children:su-p-38 md:children:children:su-p-72 xl:children:children:su-p-76 children:children:empty:su-p-0">
          <Embed blok={postBlok} />
        </div>
      </Container>
    </SbEditable>
  );
};

export default GiveGabForm;
