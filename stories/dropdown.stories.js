import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Dropdown, DropdownItem } from '../src/components/elements'

const dropdownItems = [
  {
    id: 0,
    title: 'Fully Remote',
    key: 'remote',
  },
  {
    id: 1,
    title: 'Part-Remote',
    key: 'remote',
  },
  {
    id: 2,
    title: 'In-Office',
    key: 'remote',
  },
];

storiesOf("Elements/Dropdown", module)
.add("Dropdown: Item", () => (
  <DropdownItem
    title="Hello"
  />
))
  .add("Dropdown: Example", () => (
    <Dropdown
      headerTitle="Do you work remote?"
      dropdownList={dropdownItems}
      resetThenSet={action(`select item ${dropdownItems.id}`)}
    />
  ))
;
