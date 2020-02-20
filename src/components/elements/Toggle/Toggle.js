// @flow
import React, { Component } from 'react';
import './Toggle.scss';

import { Icon } from '..';

type Props = {
  title: string,
  icon: string,
  onClick: Function,
  showContent?: boolean,
  children: object,
};

export default class Toggle extends Component<Props> {
  render() {
    const { title, icon, onClick, showContent, children } = this.props;

    const toggleStyles = showContent ? 'active' : 'inactive';

    return (
      <div className="toggle">
        <button onClick={onClick} className={`toggle__${String(toggleStyles)}`}>
          <Icon
            icon={icon}
            inactive24="inactive24"
            classOverride={`toggle__icon toggle__icon_${String(toggleStyles)}`}
          />
          {title}
        </button>
        {showContent && <div className="toggle__content">{children}</div>}
      </div>
    );
  }
}
