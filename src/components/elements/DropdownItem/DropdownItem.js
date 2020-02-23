// @flow
import React, { Component } from 'react';
import { Icon } from '../';

import './DropdownItem.scss';

type Props = {
  id: string,
  key: string,
  title: string,
  selected: boolean,
};

export default class DropdownItem extends Component<Props> {
  render() {
    const { title, key, id, selected } = this.props;

    return (
      <div id={id}>
        <button
          className="cardItem"
          key={key}
          onClick={this.onSelect.bind(this)}
          onKeyDown={this.onSelect.bind(this)}
        >
          {title}
          {selected && (
            <Icon icon="done" inactive16="inactive16" classOverride="icon" />
          )}
        </button>
      </div>
    );
  }

  onSelect = () => {
    this.props.onClick();
  };
}
