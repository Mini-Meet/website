import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Menu} from '../src/components/blocks'

const menuItems = [
  {
    id: '1',
    title: 'Vision',
    icon: 'keyboard_arrow_right',
  },
  {
    id: '2',
    title: 'Strategy',
    icon: 'keyboard_arrow_right',
  },
  {
    id: '3',
    title: 'Roadmap',
    icon: 'add',
  },
];

storiesOf("Blocks/Menu", module)
  .add("Menu: Full", () => (
    <Menu
      menuItems={menuItems}
      handleClick={action('item clicked')}
      onIconClick={action('item icon clicked')}
    />
  ))
;
