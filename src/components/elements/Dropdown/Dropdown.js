// @flow
import React, { Component } from 'react';
import './Dropdown.scss';

import { Card, Icon, DropdownItem } from '..';

type Props = {
  headerTitle: string,
  resetThenSet: Function,
  dropdownList: Object,
};

type State = {
  listOpen: boolean,
  itemSelected: boolean,
};

export default class Dropdown extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listOpen: false,
      itemSelected: false,
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
    const { dropdownList, headerTitle } = this.props;
    const { listOpen, itemSelected } = this.state;

    return (
      <div className="dropdown">
        <button className="dropdown__header" onClick={() => this.toggleList()}>
          <button className="dropdown__header_title">{headerTitle}</button>
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
        </button>
        {listOpen && (
          <Card cardActive="cardActive">
            <ul>
              <button onClick={e => e.stopPropagation()} className="cardShow">
                {dropdownList.map(item => (
                  <DropdownItem
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    onClick={() => this.selectItem(item)}
                    onKeyDown={() => this.selectItem(item)}
                    selected={itemSelected}
                  />
                ))}
              </button>
            </ul>
          </Card>
        )}
      </div>
    );
  }
  close() {
    this.setState({
      listOpen: false,
    });
  }

  selectItem(item) {
    this.setState({
      headerTitle: item.title,
      listOpen: false,
      itemSelected: true,
    });

    this.props.resetThenSet(item);
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }
}
