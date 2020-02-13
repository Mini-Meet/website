import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Menu} from '../src/components/blocks'

storiesOf("Blocks/Menu", module)
  .add("Menu: Full", () => (
    <Menu
      handleClick={action('item clicked')}
      onIconClick={action('item icon clicked')}
    />
  ))
;
