// @flow
import React, { Component } from 'react';
import './Input.scss';

type Props = {
  disabled?: boolean,
  htmlFor: string,
  icon: string,
  label: string,
  onChange: func,
  placeholder: string,
  value: string,
};

export default class Input extends Component<Props> {
  render() {
    const {
      disabled,
      htmlFor,
      icon,
      label,
      onChange,
      placeholder,
      value,
      ...otherProps
    } = this.props;

    return (
      <div className="container">
        <label htmlFor={htmlFor} className="input__label" {...otherProps}>
          {label}
          <div className="input__row">
            <i className="input__icon">{icon}</i>
            <input
              disabled={disabled}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </div>
        </label>
      </div>
    );
  }
}
