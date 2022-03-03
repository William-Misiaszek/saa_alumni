/* eslint-disable no-undef */
import React from 'react';

/**
 * Wildcard 404 component/page
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
