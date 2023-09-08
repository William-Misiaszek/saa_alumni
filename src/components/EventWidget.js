import React from 'react';

// Define the EventWidget component to render custom code
const EventWidget = ({ blok }) => {
  console.log("Rendering EventWidget with data:", blok);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: blok.codeSnippet }}></div>
      {/* If you added a Text field, you can render it like this */}
      {blok.additionalText && <p>{blok.additionalText}</p>}
    </div>
  );
};

// Register this component for use in StoryBlok
const StoryblokComponents = {
  'event_widget': EventWidget,  // Make sure this key matches the "Technical name" you set in Storyblok
  // ... other components
};

// Main component to render the StoryBlok component
const StoryblokEntry = ({ content }) => {
  const Component = StoryblokComponents[content.component];

  if (Component) {
    return <Component blok={content} />;
  }

  console.log("Unknown component:", content.component);
  return <p>Unknown component: {content.component}</p>;
};

export default StoryblokEntry;
