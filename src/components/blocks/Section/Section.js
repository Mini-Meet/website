// @flow
import React, { Component } from 'react';
import { SectionSummary } from '..';

import './Section.scss';

type Props = {
  toggleItems: object,
  sectionHeader: string,
  sectionSubheader: string,
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
    const { toggleItems, sectionHeader, sectionSubheader } = this.props;

    return (
      <div className="section">
        <div className="section__header">
          <h1>{sectionHeader}</h1>
          <p>{sectionSubheader}</p>
        </div>
        <SectionSummary toggleItems={toggleItems} />
      </div>
    );
  }
}
