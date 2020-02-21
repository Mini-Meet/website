// @flow
import React, { Component } from 'react';
import { concat, without, includes } from 'lodash';

import { Mixpanel } from '../../../Mixpanel';
import { Toggle } from '../../elements';

import './SectionSummary.scss';

type Props = {
  toggleItems: object,
  sectionName: string, // pass up to view
};

type State = {
  showContent: Array<string>,
};

type ToggleProps = {
  key: string,
  title: string,
  icon: string,
  onClick: Function,
  children: object,
  toggleItems: object,
};

export default class SectionSummary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showContent: [],
    };
  }

  componentWillMount() {
    // check stored toggle preferences
  }

  render() {
    const { toggleItems, key } = this.props;
    const { showContent } = this.state;

    // Reveal/hide content
    const menuToggleIcon = showContent ? 'arrow_right' : 'arrow_drop_down';

    return (
      <div>
        {toggleItems.map(toggle => {
          return (
            <Toggle
              key={key}
              id={toggle.id}
              title={toggle.title}
              icon={menuToggleIcon}
              onClick={this.onRevealContent.bind(this, toggle)}
              showContent={showContent}
            >
              {toggle.content}
            </Toggle>
          );
        })}
      </div>
    );
  }

  // TODO
  onRevealContent = (toggle: ToggleProps) => {
    const { showContent } = this.state;
    const { sectionName } = this.props;

    // console.log(`${!toggle.showContent}`);

    this.setState({
      showContent: includes(this.state.showContent, toggle.id)
        ? without(this.state.showContent, toggle.id)
        : concat(this.state.showContent, toggle.id),
    });

    // TODO
    Mixpanel.track(
      `${sectionName} / Toggle / ${showContent ? 'true' : 'false'}`
    );
  };
}
