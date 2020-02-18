import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { OnboardingCard } from '../src/components/elements'

import imgStrategy from '../src/assets/images/onboarding/onboarding_img_strategy.png';

storiesOf("Elements/Onboarding", module)
  .add("Onboarding Card", () => (
    <OnboardingCard
      onClick={action('item clicked')}
      img={imgStrategy}
      imgAlt="Product Strategy Card"
      title="Product Prioritisation"
    />
  ))
;
