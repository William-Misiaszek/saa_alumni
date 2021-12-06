import React from 'react';
import { dcnb } from 'cnbuilder';
import { Grid } from '../layout/Grid';
import { GridCell } from '../layout/GridCell';
import { Skiplink } from '../accessibility/Skiplink';
import hasRichText from '../../utilities/hasRichText';
import CreateBloks from '../../utilities/createBloks';
import RichTextRenderer from '../../utilities/richTextRenderer';
import getNumBloks from '../../utilities/getNumBloks';

const BasicContentLeftSidebar = ({
  blok: { content, sidebar, intro, sectionMenu },
  location,
  className,
}) => {
  const hasContent = getNumBloks(content) > 0;
  const hasSidebar = getNumBloks(sidebar) > 0;
  const hasSectionMenu = getNumBloks(sectionMenu) > 0;

  if (!hasRichText(intro) && !hasContent && !hasSidebar && !hasSectionMenu) {
    return null;
  }

  return (
    <Grid xs={12} gap className={dcnb('su-cc', className)}>
      <GridCell
        xs={12}
        lg={4}
        xxl={3}
        className="basic-page-left-sidebar su-basefont-21 lg:su-ml-0 su-rs-mb-2 su-hidden lg:su-block"
      >
        <Skiplink anchorLink="#page-content" className="su-hidden lg:su-block">
          Skip past sidebar to page content
        </Skiplink>
        {hasSectionMenu && (
          <CreateBloks
            id="section-menu-desktop"
            blokSection={sectionMenu}
            pageLink={location?.pathname}
            className="lg:su-block su-hidden lg:su-rs-mb-2"
          />
        )}
        {hasSidebar && (
          <div className="su-hidden lg:su-block">
            <CreateBloks blokSection={sidebar} />
          </div>
        )}
      </GridCell>
      <GridCell
        xs={12}
        lg={8}
        className="basic-page-main-content su-basefont-23 su-ml-0 2xl:su-col-start-5"
        id="page-content"
      >
        {hasRichText(intro) && (
          <RichTextRenderer wysiwyg={intro} className="su-type-2 su-rs-mb-3" />
        )}
        <CreateBloks blokSection={content} />
        <div className="lg:su-hidden su-rs-mt-5">
          <CreateBloks blokSection={sidebar} />
        </div>
      </GridCell>
    </Grid>
  );
};

export default BasicContentLeftSidebar;
