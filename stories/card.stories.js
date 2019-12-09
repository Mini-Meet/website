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
      card__active="card__active"
    />
  ))
  .add("Card: Modal", () => (
    <Card
      card__modal="card__modal"
    />
  ))
  .add("Card: Disabled", () => (
    <Card
      card__disabled="card__disabled"
    />
  ))
  ;
