import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";
import { Button } from '../src/components/elements'

storiesOf("Elements/Buttons", module)
  .add("Button: Primary", () => (
    <Button onClick={action('clicked')}>
      Label
    </Button>
  ))
  .add("Button: With Icon", () => (
    <Button onClick={action('clicked')}>
      <i className="material-icons">add</i>
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
  ;
