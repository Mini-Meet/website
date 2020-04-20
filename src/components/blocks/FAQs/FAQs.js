// @flow
import React, { Component } from 'react';
import { SectionSummary } from '..';

import './FAQs.scss';

const faqOne = (
  <div>
    <p>Hello</p>
  </div>
);
const faqTwo = (
  <div>
    <p>Hello</p>
  </div>
);

const faqItems = [
  {
    id: '1',
    title: 'Who pays?',
    content: faqOne,
  },
  {
    id: '2',
    title: 'Who does this?',
    content: faqTwo,
  },
];

export default class FAQs extends Component<Props> {
  render() {
    return (
      <div className="faqs">
        <SectionSummary toggleItems={faqItems} />
      </div>
    );
  }
}
