import React from 'react';
import { dcnb } from 'cnbuilder';
import SbLink from '../../utilities/sbLink';
import CreateBloks from '../../utilities/createBloks';

const VerticalNavItem = ({
  blok: { text, link, childItems, active, activeTrail },
  showNestedLevels,
}) => (
  <li className="su-m-0">
    <SbLink
      classes={dcnb(
        'su-group su-no-underline su-border-l-5 su-py-14 su-block su-pl-10 su-pr-20 su-transition-all hocus:su-text-cardinal-red-xdark hocus:su-border-cardinal-red-xdark hocus:su-underline',
        `${active ? 'su-text-black su-border-black' : 'su-border-white'}`
      )}
      link={link}
      hasExternalIcon
      externalIconClasses="group-hover:su-text-cardinal-red group-focus:su-text-cardinal-red"
    >
      {text}
    </SbLink>

    {!!childItems.length && (active || activeTrail || showNestedLevels) && (
      <ul className="su-pb-15 su-list-none su-pl-20 children:children:su-py-6 children:children:su-text-20">
        <CreateBloks
          blokSection={childItems}
          showNestedLevels={showNestedLevels}
        />
      </ul>
    )}
  </li>
);

export default VerticalNavItem;
