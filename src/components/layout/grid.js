import React from "react";
import SbEditable from "storyblok-react";
import { Grid as DrGrid } from "decanter-react";
import { dcnb } from "cnbuilder";
import CreateBloks from "../../utilities/createBloks";
import WidthBox from "./widthBox";

const Grid = ({
  blok: { removeGap, numCol, content, width, isStretchItems },
  blok,
}) => {
  // Options to have regular grid gap or 1px horizontal gaps
  let gapClasses = "su-grid-gap";

  if (removeGap) {
    gapClasses = "su-gap-x-[1px]";
  }

  // By default, items in a row are top-aligned vertically
  let itemClasses = "su-items-start";

  // Option to force items in the same row to stretch to the height of the tallest item
  if (isStretchItems) {
    itemClasses = "su-items-stretch";
  }

  let grid = (
    <DrGrid
      xs={1}
      md={2}
      xl={numCol}
      className={dcnb(
        "su-justify-items-center su-gap-y-2xl md:su-gap-y-[80px] xl:su-gap-y-[100px]",
        gapClasses,
        itemClasses
      )}
    >
      <CreateBloks blokSection={content} />
    </DrGrid>
  );

  if (numCol === "auto") {
    grid = (
      <DrGrid
        className={dcnb(
          "su-grid-cols-[repeat(auto-fit,minmax(34rem,1fr))] su-justify-items-center su-gap-y-2xl md:su-gap-y-[80px] xl:su-gap-y-[100px]",
          gapClasses,
          itemClasses
        )}
      >
        <CreateBloks blokSection={content} />
      </DrGrid>
    );
  }

  return (
    <SbEditable content={blok}>
      <WidthBox width={width} className="saa-grid">
        {grid}
      </WidthBox>
    </SbEditable>
  );
};

export default Grid;