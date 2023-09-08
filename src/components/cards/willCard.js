import React from 'react';
import SbEditable from 'storyblok-react';

const willCard = ({
  blok: {
    codeSnippet  // Textarea field from Storyblok
  },
  blok,
}) => {
  // Function to render the widget
  const renderEventWidget = () => {
    console.log("Rendering widget with codeSnippet:", codeSnippet);
    return (
      <div dangerouslySetInnerHTML={{ __html: codeSnippet }}></div>
    );
  };

  return (
    <SbEditable content={blok}>
      <div className="will-card su-basefont-23 su-break-words">
        {renderEventWidget()} {/* Call the function to render the widget */}
      </div>
    </SbEditable>
  );
};

export default willCard;
