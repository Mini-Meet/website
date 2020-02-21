// @flow
import React, { Component } from 'react';
import { concat, without, includes } from 'lodash';

import { Mixpanel } from '../../../Mixpanel';
import { Toggle } from '../../elements';

import './SectionSummary.scss';

type Props = {
  toggleItems: object,
  sectionHeader: string,
};

type ToggleProps = {
  key: string,
  title: string,
  icon: string,
  onShowToggle: Function,
  toggleItems: object,
};

export default class SectionSummary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    //
  }

  componentWillMount() {
    // check stored toggle preferences
  }

  render() {
    const { toggleItems, key } = this.props;

    return (
      <div>
        {toggleItems.map(toggle => {
          return (
            <Toggle
              key={key}
              id={toggle.id}
              title={toggle.title}
              onShowToggle={this.onShowToggle.bind(this, toggle)}
            >
              {toggle.content}
            </Toggle>
          );
        })}
      </div>
    );
  }

  onShowToggle = (toggle: ToggleProps) => {
    const { sectionHeader } = this.props;

    Mixpanel.track(`${sectionHeader} / ${toggle.title} / Toggle`);
  };
}
