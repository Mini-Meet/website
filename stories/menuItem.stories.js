import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";
import { Menu} from '../src/components/blocks'
import { MenuItem} from '../src/components/elements'

storiesOf("Elements/Menu", module)
  // Commonly used:
  // add, close, cloud, done, delete_outline,
  // event, more_vert,

  .add("Menu: Full", () => (
    <Menu
      handleClick={action('item clicked')}
      onIconClick={action('item icon clicked')}
    />
  ))
  .add("Menu: Inactive", () => (
    <MenuItem
      title="Menu item"
      icon="keyboard_arrow_right"
      onClick={action('clicked')}
      onIconClick={action('icon clicked')}
    />
  ))
  .add("Menu: Active", () => (
    <MenuItem
      title="Menu item"
      itemActive="itemActive"
      icon="add"
      onClick={action('active clicked')}
      onIconClick={action('active icon clicked')}
    />
  ))
  ;
