import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";
import { Button, Input } from '../src/Components/elements'

storiesOf("Blocks", module).add("BLOCK TEST", () => (
  <p>Here will be some block</p>
));

/**
  * Button stories
  */
storiesOf("Elements", module)
  .add("Button: Primary", () => (
    <Button onClick={action('clicked')}>
      Label
    </Button>
  ))
  .add("Button: Secondary", () => (
    <Button
      onClick={action('clicked')}
      secondary="secondary"
    >
      Label
    </Button>
  ))
  .add("Button: Tertiary", () => (
    <Button
      onClick={action('clicked')}
      tertiary="tertiary"
    >
      Label
    </Button>
  ))
  .add("Button: Quarternary", () => (
    <Button
      onClick={action('clicked')}
      quarternary="quarternary"
    >
      Label
    </Button>
  ))
  .add("Button: Disabled", () => (
    <Button
      onClick={action('clicked')}
      disabled
    >
      Label
    </Button>
  ))
  .add("Input: Default", () => (
    <Input
      placeholder="type..."
    />
  ))
  .add("Input: Label", () => (
    <Input
      placeholder="type..."
      label="Label"
      type="text"
    />
  ));

/**
  * Some NEW stories
  */
