import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";
// import { Welcome } from "@storybook/react/demo";
import { Input } from '../src/Components/elements'

storiesOf("Elements/Input", module)
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
))
;
