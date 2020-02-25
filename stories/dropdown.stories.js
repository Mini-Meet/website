// @flow
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Dropdown, DropdownItem } from '../src/components/elements'

const dropdownItems = [
  {
    id: 0,
    label: 'Fully Remote',
  },
  {
    id: 1,
    label: 'Part-Remote',
  },
  {
    id: 2,
    label: 'In-Office',
  },
];

storiesOf("Elements/Dropdown", module)
  .add("Dropdown: Simple", () => (
    <Dropdown
      title="Do you work remote?"
      items={dropdownItems}
    />
  ));
