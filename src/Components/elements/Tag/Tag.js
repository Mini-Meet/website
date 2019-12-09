// @flow
import React, { Component } from 'react';
import './Tag.scss';

// render with <Icon secondary/tertiary /> for different style classes
// btnContainer used in instances where necessary e.g. ConfirmationModal

type Props = {
  onClickIcon: Function,
  onClick: Function,
  icon: string,
  input?: boolean,
  label: string,
  addNew?: boolean,
  selected?: boolean,
  disabled?: boolean,
};

export default class Tag extends Component<Props> {
  render() {
    const {
      onClickIcon,
      onClick,
      icon,
      input,
      label,
      addNew,
      selected,
      disabled,
    } = this.props;

    const tagType = addNew || selected || disabled || 'default';

    return (
      <div className={`${tagType} tag`} onClick={onClick} role="presentation">
        {!input && <p className="tag__label">{label}</p>}
        {input && <input placeholder="add new..." />}
        <i className="tag__icon inactive16" onClickIcon={onClickIcon}>
          {icon}
        </i>
      </div>
    );
  }
}
