import React from 'react';

/**
 * Wildcard 404 component/page
 *
 * Netlify's gatsby essential plugin adds a wildcard `/*` to support DSG.
 * When the DSG function and no page is available it will return this component.
 *
 * @see
 * https://github.com/netlify/netlify-plugin-gatsby/blob/main/plugin/src/index.ts#L83-L86
 * https://github.com/netlify/netlify-plugin-gatsby/blob/main/plugin/src/templates/utils.ts#L97
 */
const Wildcard404 = ({ location }) => {
  const destinationURL = 'https://cardinalalumni.stanford.edu';
  const pathname = location.pathname ? location.pathname : '';
  const query = location.hash ? location.hash : location.search;

  if (typeof window !== 'undefined') {
    window.location = destinationURL + pathname + query;
  }

  return null;
};

export default Wildcard404;
