import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Card } from '../src/components/elements'

storiesOf("Elements/Cards", module)
  .add("Card: Default", () => (
    <Card onClick={action('clicked')}>
      <h3>Card</h3>
    </Card>
  ))
  .add("Card: Active", () => (
    <Card cardActive="cardActive" onClick={action('clicked')}>
      <h3>Card</h3>
    </Card>
  ))
  .add("Card: Modal", () => (
    <Card
      cardModal="cardModal" onClick={action('clicked')}>
      <h3>Card</h3>
    </Card>
  ))
  .add("Card: Disabled", () => (
    <Card cardDisabled="cardDisabled">
      <h3>Card</h3>
    </Card>
  ))
  ;
