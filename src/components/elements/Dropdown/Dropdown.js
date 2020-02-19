// @flow
import React, { Component } from 'react';
import './Dropdown.scss';
import { Card, Icon } from '..';

// TODO
// Props validation & Click handlers

type Props = {
  title: string,
  resetThenSet: Function,
  dropdownList: Object,
};

export default class Dropdown extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
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

  close() {
    this.setState({
      listOpen: false,
    });
  }

  selectItem(title, id, stateKey) {
    this.setState(
      {
        headerTitle: title,
        listOpen: false,
      },
      this.props.resetThenSet(id, stateKey)
    );
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  }

  render() {
    const { dropdownList } = this.props;

    const { listOpen, headerTitle } = this.state;
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
                  <button
                    className="cardItem"
                    key={item.id}
                    onClick={() =>
                      this.selectItem(item.title, item.id, item.key)
                    }
                    onKeyDown={() =>
                      this.selectItem(item.title, item.id, item.key)
                    }
                  >
                    {item.title}{' '}
                    {item.selected && (
                      <Icon
                        icon="done"
                        inactive16="inactive16"
                        classOverride="icon"
                      />
                    )}
                  </button>
                ))}
              </button>
            </ul>
          </Card>
        )}
      </div>
    );
  }
}
