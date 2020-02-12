import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";
import { Icon } from '../src/components/elements'

storiesOf("Elements/Icon", module)
  // Commonly used:
  // add, close, cloud, done, delete_outline,
  // event, more_vert,
  .add("Icon: Button", () => (
    <Icon
      icon="close"
      onClick={action('clicked')}
    />
  ))
  .add("Icon: Inactive", () => (
    <Icon
      icon="close"
      inactive24="inactive24"
    />
  ))
  .add("Icon: Inactive Small", () => (
    <Icon
      icon="close"
      inactive16="inactive16"
    />
  ))
  .add("Icon: Disabled", () => (
    <Icon
      icon="close"
      disabled="disabled"
    />
  ))
  ;
