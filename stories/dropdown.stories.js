import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Dropdown } from '../src/components/elements'

const dropdownItems = [
  {
    id: 0,
    title: 'Fully Remote',
    selected: false,
    key: 'remote',
  },
  {
    id: 1,
    title: 'Part-Remote',
    selected: false,
    key: 'remote',
  },
  {
    id: 2,
    title: 'In-Office',
    selected: false,
    key: 'remote',
  },
];

storiesOf("Elements/Dropdown", module)
  .add("Dropdown: Example", () => (
    <Dropdown
      title="Do you work remote?"
      dropdownList={dropdownItems}
      resetThenSet={action(`select item ${dropdownItems.id}`)}
    />
  ))
;
