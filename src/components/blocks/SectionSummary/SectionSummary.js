// @flow
import React, { Component } from 'react';

import { Mixpanel } from '../../../Mixpanel';
import { Toggle } from '../../elements';

import './SectionSummary.scss';

type ToggleProps = {
  id: number,
  key: string,
  title: string,
  content: string,
};

type Props = {
  toggleItems: Array<ToggleProps>,
  sectionHeader: string,
};

export default class SectionSummary extends Component<Props> {
  render() {
    const { toggleItems } = this.props;

    return (
      <div>
        {toggleItems.map(toggle => {
          return (
            <Toggle
              key={toggle.key}
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
    console.log(`A / Home / ${sectionHeader} / ${toggle.title}`);
    Mixpanel.track(`A / Home / ${sectionHeader} / ${toggle.title}`);
  };
}
