// @flow
import React, { Component } from 'react';
import './Toggle.scss';

import { Icon } from '..';

type Props = {
  id: string,
  title: string,
  icon: string,
  onClick: Function,
  children: object,
};

type State = {
  showContent: boolean,
};

export default class Toggle extends Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props);

    this.state = {
      showContent: false,
    };

    console.log(this.state.showContent);
    this.onShow = this.onShow.bind(this);
  }

  render() {
    const { id, title, icon, onClick, children } = this.props;
    const { showContent } = this.state;

    // Reveal/hide content changes
    const menuToggleIcon = showContent ? 'arrow_right' : 'arrow_drop_down';
    const toggleStyles = showContent ? 'active' : 'inactive';

    return (
      <div className="toggle">
        <button
          onClick={this.onShow}
          className={`toggle__${String(toggleStyles)}`}
        >
          <Icon
            icon={menuToggleIcon}
            inactive24="inactive24"
            classOverride={`toggle__icon toggle__icon_${String(toggleStyles)}`}
          />
          {title}
        </button>
        {showContent && <div className="toggle__content">{children}</div>}
      </div>
    );
  }

  onShow = () => {
    const { showContent } = this.state;

    this.setState({
      showContent: !showContent,
    });

    this.props.onShowToggle();
  };
}
