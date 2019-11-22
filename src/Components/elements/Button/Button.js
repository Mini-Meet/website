// @flow
import React, { Component } from 'react';
import './Button.scss';

// render with <Button secondary/tertiary /> for different style classes
// btnContainer used in instances where necessary e.g. ConfirmationModal

type Props = {
  onClick: Function,
  children: string,
  secondary?: boolean,
  tertiary?: boolean,
  quarternary?: boolean,
  disabled?: boolean,
};

export default class Button extends Component<Props> {
  render() {
    const {
      onClick,
      children,
      secondary,
      tertiary,
      quarternary,
      disabled,
    } = this.props;
    const buttonType = secondary || tertiary || quarternary || 'primary';

    return (
      <div onClick={onClick} className="container" role="presentation">
        <button className={buttonType} disabled={disabled}>
          {children}
        </button>
      </div>
    );
  }
}
