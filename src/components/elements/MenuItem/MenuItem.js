// @flow
import React, { Component } from 'react';
import './MenuItem.scss';
import { Icon } from '..';

type Props = {
  title: string,
  icon: string,
  // onClick: Function,
};

export default class MenuItem extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      itemActive: false,
    };
  }

  componentDidUpdate() {
    const { itemActive } = this.state;
    if (itemActive) {
      // setState to SCSS active class
    } else {
      // setState to SCSS inActive class
    }
  }

  onClick() {
    this.setState(prevState => ({
      itemActive: true, //
    }));
  }

  // onIconClick() { }

  render() {
    const { title, icon } = this.props;

    return (
      <div className="item">
        <div
          className="item__header"
          onClick={() => this.onClick()}
          // {listOpen ? ( change SCSS class
        >
          <div className="item__header_title">{title}</div>
          <Icon
            icon={icon}
            // onIconClick
            inactive24="inactive24"
            classOverride="item__header_icon"
          />
        </div>
      </div>
    );
  }
}
