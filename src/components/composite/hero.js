import React from 'react';
import SbEditable from 'storyblok-react';
import { ArrowDownIcon } from '@heroicons/react/outline';
import { dcnb } from 'cnbuilder';
import { FlexBox } from '../layout/FlexBox';
import { Container } from '../layout/Container';
import { SrOnlyText } from '../accessibility/SrOnlyText';
import FullWidthImage from '../media/fullWidthImage';
import CreateBloks from '../../utilities/createBloks';
import getNumBloks from '../../utilities/getNumBloks';

const Hero = ({
  blok: {
    headlineSize,
    isDarkGradient,
    imageFocus,
    cta,
    image: { filename, focus } = {},
    sansSuper,
    sansSub,
    serifSuper,
    headline,
    isHideScroll,
  },
  blok,
}) => {
  let heroHeadlineSize = 'su-type-7 su-mx-auto su-max-w-900';

  if (headlineSize === 'large') {
    heroHeadlineSize = 'su-type-8';
  } else if (headlineSize === 'small') {
    heroHeadlineSize = 'su-type-6 su-mx-auto su-max-w-900';
  }

  let gradientFrom = 'su-from-transparent';

  if (isDarkGradient) {
    gradientFrom = 'su-from-black-true-opacity-20';
  }

  const numCta = getNumBloks(cta);

  return (
    <SbEditable content={blok}>
      <Container
        className="hero su-relative su-bg-saa-black lg:su-top-0"
        width="full"
      >
        {filename?.startsWith('http') && (
          <figure className="su-absolute su-top-0 su-overflow-hidden su-w-full su-h-full">
            <FullWidthImage
              filename={filename}
              imageFocus={imageFocus}
              smartFocus={focus}
              className="su-w-full su-h-full su-object-cover"
              loading="eager"
            />
          </figure>
        )}
        <div
          className={dcnb(
            'su-absolute su-block su-w-full su-h-full su-top-0 su-bg-gradient-to-b su-to-saa-black',
            gradientFrom
          )}
          aria-hidden="true"
        />
        <Container
          className={`su-relative su-rs-pt-9
          ${isHideScroll ? 'su-rs-pb-8' : 'su-rs-pb-4'}`}
        >
          <FlexBox direction="col" className="lg:su-mt-[190px]">
            {(sansSuper || serifSuper || headline || sansSub) && (
              <div className="su-text-center su-text-white">
                {sansSuper && (
                  <span className="su-block su-max-w-prose su-font-semibold su-leading-display su-text-shadow-md su-type-4 su-mx-auto su-mb-01em">
                    {sansSuper}
                  </span>
                )}
                {serifSuper && (
                  <span className="su-block su-max-w-prose su-font-serif su-leading-display su-type-2 su-text-shadow su-mx-auto su-mb-05em">
                    {serifSuper}
                  </span>
                )}
                {headline && (
                  <span
                    className={dcnb(
                      'su-block su-font-bold su-font-serif su-leading-tight su-tracking-normal su-text-shadow-lg su-mb-02em',
                      heroHeadlineSize
                    )}
                  >
                    {headline}
                  </span>
                )}
                {sansSub && (
                  <p className="su-max-w-prose su-type-1 su-leading-display su-text-shadow su-mx-auto su-mb-0">
                    {sansSub}
                  </p>
                )}
              </div>
            )}
            {numCta > 0 && (
              <div className={sansSub ? 'su-rs-mt-4' : ''}>
                <CreateBloks blokSection={cta} />
              </div>
            )}
            {!isHideScroll && (
              <div className="su-text-center su-text-white su-flex-grow-0 su-rs-mt-5 su-font-serif su-font-regular su-text-19 md:su-text-22">
                <p className="su-mb-02em">Scroll to explore</p>
                <a
                  href="#page-title"
                  className="su-block su-mx-auto su-w-fit su-group"
                >
                  <SrOnlyText>Jump to main content</SrOnlyText>
                  <ArrowDownIcon
                    className="su-transition-colors su-text-digital-red-xlight su-w-40 su-h-40 su-p-6 su-border-2 su-border-cardinal-red su-rounded-full group-hover:su-text-white group-focus:su-text-white group-hover:su-bg-cardinal-red-dark group-focus:su-bg-cardinal-red-dark"
                    aria-hidden="true"
                  />
                </a>
              </div>
            )}
          </FlexBox>
        </Container>
      </Container>
    </SbEditable>
  );
};

export default Hero;
