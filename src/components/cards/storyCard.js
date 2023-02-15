import React from 'react';
import { useLocation } from '@reach/router';
import CreateStories from '../../utilities/createStories';

const StoryCard = ({
  blok: {
    storyPicker,
    tabText,
    isMinimal,
    isBigText,
    hideTab,
    hideImage,
    headingLevel,
    cardImageFocus,
    id,
  },
  isDark,
}) => {
  const location = useLocation();
  const locationName = () => {
    let homeLocation;
    if (location.pathname === '/') {
      homeLocation = 'home';
      return homeLocation;
    }
    return location.pathname.replaceAll('/', '');
  };

  return (
    <CreateStories
      stories={storyPicker}
      tabText={tabText}
      layout="card"
      isBigText={isBigText}
      hideTab={hideTab}
      hideImage={hideImage}
      isMinimal={isMinimal}
      headingLevel={headingLevel}
      cardImageFocus={cardImageFocus}
      isDark={isDark}
      id={id || ''}
      // id={id ? `${locationName()}-${id}` : ''}
      // id="testtt"
    />
  );
};
export default StoryCard;
