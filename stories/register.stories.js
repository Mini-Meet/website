import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Register} from '../src/components/views'

storiesOf("Blocks/Register", module)
  .add("Register", () => (
    <Register
      handleClick={action('item clicked')}
      onIconClick={action('item icon clicked')}
    />
  ))
;
