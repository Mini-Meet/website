// @flow
import React, { Component } from 'react';
import { includes } from 'lodash';
import './Toggle.scss';

import { Icon } from '..';

type Props = {
  id: string,
  title: string,
  icon: string,
  onClick: Function,
  showContent?: boolean,
  children: object,
};

export default class Toggle extends Component<Props> {
  render() {
    const { id, title, icon, onClick, showContent, children } = this.props;

    const toggleStyles = includes(showContent, id) ? 'active' : 'inactive';

    return (
      <div className="toggle" key={id}>
        <button onClick={onClick} className={`toggle__${String(toggleStyles)}`}>
          <Icon
            icon={icon}
            inactive24="inactive24"
            classOverride={`toggle__icon toggle__icon_${String(toggleStyles)}`}
          />
          {title}
        </button>
        {includes(showContent, id) && (
          <div className="toggle__content">{children}</div>
        )}
      </div>
    );
  }
}
