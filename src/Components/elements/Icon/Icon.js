// @flow
import React, { Component } from 'react';
import './Icon.scss';

// render with <Icon secondary/tertiary /> for different style classes
// btnContainer used in instances where necessary e.g. ConfirmationModal

type Props = {
  onClick: Function,
  icon: string,
  inactive16?: boolean,
  inactive24?: boolean,
  disabled?: boolean,
};

export default class Icon extends Component<Props> {
  render() {
    const { onClick, icon, inactive16, inactive24, disabled } = this.props;

    const iconType = inactive16 || inactive24 || disabled || 'button';

    return (
      <div onClick={onClick} className="icon-container" role="presentation">
        <i className={iconType}>{icon}</i>
      </div>
    );
  }
}
