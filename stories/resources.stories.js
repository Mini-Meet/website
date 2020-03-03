import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
import { Resources } from '../src/components/views'

storiesOf("Views/Resources", module)
  .add("Resources", () => (
    <Resources
    />
  ))
;
