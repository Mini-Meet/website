import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";
import { Tag } from '../src/Components/elements'

storiesOf("Elements/Tag", module)
  // Commonly used:
  // add, close, cloud, done, delete_outline,
  // event, more_vert,
  .add("Tag: Default", () => (
    <Tag
      icon="close"
      label="Label"
      onClick={action('clicked tag')}
      onClickIcon={action('clicked icon')}
    />
  ))
  .add("Tag: Selected", () => (
    <Tag
      label="Label"
      selected="selected"
      onClick={action('clicked tag')}
    />
  ))
  .add("Tag: Add", () => (
    <Tag
      addNew="addNew"
      icon="add"
      input
      label="Label"
      onClickIcon={action('clicked icon')}
    />
  ))
  ;
