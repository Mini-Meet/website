// @flow
import React, { Component } from 'react';
import { SectionSummary } from '..';

import './Section.scss';

type Props = {
  sectionHeader: string,
  sectionSubheader: string,
  toggleItems: object,
};

type State = {
  //
};

export default class Section extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      //
    };
  }

  componentWillMount() {
    // check stored toggle preferences
  }

  render() {
    const { sectionHeader, sectionSubheader, toggleItems } = this.props;

    return (
      <div className="section">
        <div className="section__header">
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
