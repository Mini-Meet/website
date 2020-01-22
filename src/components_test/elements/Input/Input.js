// @flow
import React, { Component } from 'react';
import './Input.scss';

type Props = {
  disabled?: boolean,
  htmlFor: string,
  label: string,
  onChange: Function,
  placeholder: string,
  value: string,
};

export default class Input extends Component<Props> {
  render() {
    const {
      disabled,
      htmlFor,
      label,
      onChange,
      placeholder,
      value,
    } = this.props;

    return (
      <div className="container">
        <label htmlFor={htmlFor} className="input__label">
          <p>{label}</p>
          <div className="input__row">
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
