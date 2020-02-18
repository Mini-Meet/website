import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { OnboardingCard } from '../src/components/elements'
import { OnboardingCards } from '../src/components/blocks'

import imgStrategy from '../src/assets/images/onboarding/onboarding_img_strategy.png';

// Onboarding Card Content
const onboardingCards = [
  {
    id: '1',
    title: 'Product Prioritisation',
    img: imgStrategy,
    imgAlt: 'Product Prioritisation',
  },
  {
    id: '2',
    title: 'Setting Strategy',
    img: imgStrategy,
    imgAlt: 'Setting Strategy',
  },
  {
    id: '3',
    title: 'Stakeholder Management',
    img: imgStrategy,
    imgAlt: 'Stakeholder Management',
  },
];

storiesOf("Elements/Onboarding", module)
  .add("Onboarding Card", () => (
    <OnboardingCard
      onClick={action('item clicked')}
      img={imgStrategy}
      imgAlt="Product Strategy Card"
      title="Product Prioritisation"
    />
  ))
  .add("Onboarding Cards", () => (
    <OnboardingCards
      onboardingCards={onboardingCards}
      onClick={action('item clicked')}
    />
  ))
;
