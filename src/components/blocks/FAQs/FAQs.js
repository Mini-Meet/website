// @flow
import React, { Component } from 'react';
import { SectionSummary } from '..';

import './FAQs.scss';

type Props = {
  sectionHeader: string,
  sectionSubheader: string,
  toggleItems: Object, // TODO - add real props
};

export default class FAQs extends Component<Props> {
  render() {
    const { sectionHeader, sectionSubheader, toggleItems } = this.props;

    return (
      <div className="faqs">
        <div className="faqs__header">
          <h1>{sectionHeader}</h1>
          <p>{sectionSubheader}</p>
        </div>
        <SectionSummary
          toggleItems={toggleItems}
          sectionHeader={sectionHeader}
        />
      </div>
    );
  }
}
