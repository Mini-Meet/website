import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";
import Button from '../src/Components/elements/Button/Button.js'

storiesOf("Blocks", module).add("BLOCK TEST", () => (
  <p>Here will be some block</p>
));


/**
  * Button stories
  */
storiesOf("Elements", module)
  .add("Button - with label", () => (
    <Button onClick={action('clicked')}>
      Label
    </Button>
  ))
  .add("Button - disabled", () => (
    <Button
      onClick={action('clicked')}
      disabled
    >
      Label
    </Button>
  ));

/**
  * Some NEW stories
  */