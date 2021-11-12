import React from 'react';
import SbEditable from 'storyblok-react';
import { dcnb } from 'cnbuilder';
import {
  smallPaddingBottom,
  smallPaddingTop,
  textAlign,
} from '../../utilities/dataSource';
import RichTextRenderer from '../../utilities/richTextRenderer';
import WidthBox from '../layout/widthBox';

const Wysiwyg = ({
  blok: {
    content,
    width,
    spacingTop,
    spacingBottom,
    isLightText,
    align = 'left',
    blockAlign = 'center',
    id,
  },
  blok,
}) => {
  const mySpacingTop = smallPaddingTop[spacingTop] ?? '';
  const mySpacingBottom = smallPaddingBottom[spacingBottom] ?? '';

  return (
    <SbEditable content={blok}>
      <WidthBox
        width={width ?? 'edge-to-edge'}
        className={dcnb(mySpacingTop, mySpacingBottom)}
        id={id || ''}
        align={blockAlign}
      >
        <RichTextRenderer
          isDark={isLightText}
          wysiwyg={content}
          className={dcnb(
            'su-heading-link-icon',
            textAlign[align] || textAlign.left
          )}
        />
      </WidthBox>
    </SbEditable>
  );
};

export default Wysiwyg;
