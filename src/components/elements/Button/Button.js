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
  classOverride: string,
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
      classOverride,
    } = this.props;
    const buttonType = secondary || tertiary || quarternary || 'primary';

    return (
      <div onClick={onClick} className="btnContainer" role="presentation">
        <button
          className={`${String(buttonType)} ${String(classOverride)}`}
          disabled={disabled}
        >
          {children}
        </button>
      </div>
    );
  }
}
