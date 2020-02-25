// @flow
import React, { Component } from 'react';
import { Icon } from '..';

import './DropdownItem.scss';

type Props = {
  id: number,
  label: string,
  isSelected: boolean,
  onSelect: Function,
};

export default class DropdownItem extends Component<Props> {
  render() {
    const { label, id, isSelected } = this.props;

    return (
      <div>
        <button
          className="cardItem"
          onClick={this.onSelect.bind(this, id)}
          onKeyDown={this.onSelect.bind(this, id)}
        >
          {label}
          {isSelected && (
            <Icon icon="done" inactive16="inactive16" classOverride="icon" />
          )}
        </button>
      </div>
    );
  }

  onSelect = (id: number) => {
    this.props.onSelect(id);
  };
}
