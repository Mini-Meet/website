import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ResourceCard } from '../src/components/elements'
import { ResourceCards } from '../src/components/blocks'

import logoPM from '../src/assets/images/resources/logoPM.png';

// Onboarding Card Content
const resourceCards = [
  {
    id: '1',
    title: 'Article Title',
    description: "A long description about this article. And here is some more text.",
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '2',
    title: 'Article Title',
    description: "A long description about this article. And here is some more text.",
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '3',
    title: 'Article Title',
    description: "A long description about this article. And here is some more text.",
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '4',
    title: 'Article Title',
    description: "A long description about this article. And here is some more text.",
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '5',
    title: 'Article Title',
    description: "A long description about this article. And here is some more text.",
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '6',
    title: 'Article Title',
    description: "A long description about this article. And here is some more text.",
    logo: logoPM,
    logoAlt: 'Article Title',
  },
];

storiesOf("Elements/Resources", module)
  .add("Resource Card", () => (
    <ResourceCard
      onClick={action('item clicked')}
      logo={logoPM}
      logoAlt="Article Title Card"
      title="Article Title"
      description="A long description about this article. And here is some more text."
    />
  ))
  .add("Resource Cards", () => (
    <ResourceCards
      categoryTitle="Current Category"
      resourceCards={resourceCards}
      onClick={action('item clicked')}
    />
  ))
;
