import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";
import { MenuItem } from '../src/components/elements'

storiesOf("Elements/Menu", module)
  // Commonly used:
  // add, close, cloud, done, delete_outline,
  // event, more_vert,
  .add("Menu: Inactive", () => (
    <MenuItem
      title="Menu item"
      icon="plus"
      onClick={action('clicked')}
    />
  ))
  ;
