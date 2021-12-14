import React, { useEffect, useState } from 'react';
import fetch from 'node-fetch';
import CreateStory from '../../utilities/createStory';
import CreateBloks from '../../utilities/createBloks';

const ProtectedContentWrapper = ({ blok }) => {
  const protectedContentSlug = blok.protectedContent.story.full_slug;
  const [authenticatedContent, setAuthenticatedContent] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      fetch(
        `http://localhost:64946/api/private-proxy?slug=${protectedContentSlug}`
      )
        .then((res) => res.json())
        .then((pageContent) => {
          setAuthenticatedContent(pageContent.story);
        });
    }
  }, []);

  return (
    <div className="su-my-16 su-bg-cool-grey su-text-white su-p-16">
      {authenticated && authenticatedContent && (
        <CreateStory story={authenticatedContent} />
      )}
      {!authenticated && (
        <div>
          <CreateBloks blokSection={blok.anonymousContent} />
          <button
            type="button"
            className="su-button"
            onClick={() => setAuthenticated(true)}
          >
            Simulate Login
          </button>
        </div>
      )}
    </div>
  );
};

export default ProtectedContentWrapper;
