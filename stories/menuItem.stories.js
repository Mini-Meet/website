import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Menu} from '../src/components/blocks'
import { MenuItem} from '../src/components/elements'

storiesOf("Elements/Menu", module)
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
      itemActive
      icon="add"
      onClick={action('active clicked')}
      onIconClick={action('active icon clicked')}
    />
  ));
