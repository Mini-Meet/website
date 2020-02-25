// @flow
import React, { Component } from 'react';
import { find, get, map } from 'lodash';
import './Dropdown.scss';

import { Card, Icon, DropdownItem } from '..';

type Props = {
  title: string,
  items: {
    id: number,
    label: string,
  },
};

type State = {
  listOpen: boolean,
  selectedItemId: ?number,
};

export default class Dropdown extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listOpen: false,
      selectedItemId: null,
    };
    this.close = this.close.bind(this);
  }

  componentDidUpdate() {
    const { listOpen } = this.state;

    setTimeout(() => {
      if (listOpen) {
        window.addEventListener('click', this.close);
      } else {
        window.removeEventListener('click', this.close);
      }
    }, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close);
  }

  render() {
    const { items, title } = this.props;
    const { listOpen, selectedItemId } = this.state;
    const selectedItem = find(items, item => item.id === selectedItemId);
    const selectedItemTitle = get(selectedItem, 'label', title);

    return (
      <div className="dropdown">
        <div
          className="dropdown__header"
          role="presentation"
          onClick={() => this.toggleList()}
        >
          <div className="dropdown__header_title">{selectedItemTitle}</div>
          {listOpen ? (
            <Icon
              icon="arrow_drop_up"
              inactive24="inactive24"
              classOverride="dropdown__header_iconup"
            />
          ) : (
            <Icon
              icon="arrow_drop_down"
              inactive24="inactive24"
              classOverride="dropdown__header_icondown"
            />
          )}
        </div>
        {listOpen && (
          <Card cardActive="cardActive">
            <ul>
              <div
                onClick={e => e.stopPropagation()}
                role="presentation"
                className="cardShow"
              >
                {map(items, item => (
                  <DropdownItem
                    id={item.id}
                    key={item.id}
                    label={item.label}
                    onClick={this.selectItem}
                    onKeyDown={this.selectItem}
                    isSelected={selectedItemId === item.id}
                  />
                ))}
              </div>
            </ul>
          </Card>
        )}
      </div>
    );
  }

  close = () => {
    this.setState({
      listOpen: false,
    });
  };

  selectItem = (id: number) => {
    this.setState({
      listOpen: false,
      selectedItemId: id,
    });
  };

  toggleList = () => {
    this.setState({
      listOpen: !this.state.listOpen,
    });
  };
}
