import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Card } from '../src/Components/elements'

storiesOf("Elements/Cards", module)
  .add("Card: Default", () => (
    <Card
      onClick={action('clicked')}
    />
  ))
  .add("Card: Active", () => (
    <Card
      cardActive="cardActive"
    />
  ))
  .add("Card: Modal", () => (
    <Card
      cardModal="cardModal"
    />
  ))
  .add("Card: Disabled", () => (
    <Card
      cardDisabled="cardDisabled"
    />
  ))
  ;
