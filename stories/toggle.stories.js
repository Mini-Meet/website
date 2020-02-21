import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { Toggle } from '../src/components/elements'

storiesOf("Elements/Toggle", module)

  .add("Toggle", () => (
    <Toggle
      title="Toggle title"
      icon="arrow_right" // inactive: arrow_drop_down
    />
  ))
  ;
