import React, { useEffect } from 'react';

const Page404 = () => {
  useEffect(() => {
    const { pathname } = window.location;
    const redirectDomain = 'https://cardinalalumni.stanford.edu';
    window.location.replace(`${redirectDomain}${pathname}`);
  });

  return <div>Page not found</div>;
};

export default Page404;
