// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { Step } from '../../elements';

import './Stepper.scss';

type Props = {
  onIconClick: Function,
};

type State = {
  hideMenu: boolean,
  activeItem: ?string,
};

type StepperProps = {
  id: string,
  title: string,
  icon: string,
};

export default class Stepper extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hideMenu: false,
      activeItem: null,
    };
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  render() {
    const { hideMenu, activeItem } = this.state;

    // Menu Items
    const menuItems = [
      {
        id: '1',
        title: 'Vision',
        icon: 'keyboard_arrow_right',
      },
      {
        id: '2',
        title: 'Strategy',
        icon: 'keyboard_arrow_right',
      },
      {
        id: '3',
        title: 'Roadmap',
        icon: 'add',
      },
    ];

    // Reveal/hide menu
    const menuToggleIcon = hideMenu ? 'keyboard_arrow_left' : 'close';
    const menuStyles = hideMenu ? 'menuClosed' : 'menuOpen';

    return (
      <div className="container">
        <button
          className={`${menuStyles}__btn`}
          onClick={this.onRevealMenu.bind(this)}
        >
          <i className={`${menuStyles}__btn_icon material-icons`}>
            {menuToggleIcon}
          </i>
        </button>

        <div className={`${menuStyles}__menu`}>
          <div className={`${menuStyles}__menu_label`}>Menu</div>
          <div className={`${menuStyles}__menu_list`}>
            {menuItems.map(menuItem => {
              const isActive = activeItem === menuItem.id;
              return (
                <Step
                  key={menuItem.id}
                  title={menuItem.title}
                  onClick={this.handleMenuItemClick.bind(this, menuItem)}
                  itemActive={isActive}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  onRevealMenu = () => {
    const { hideMenu } = this.state;

    this.setState({
      hideMenu: !hideMenu,
    });

    Mixpanel.track(`Menu = ${hideMenu ? 'true' : 'false'}`);
  };

  handleMenuItemClick = (menuItem: StepperProps) => {
    this.setState({
      activeItem: menuItem.id,
    });

    console.log(this.state.activeItem);
  };
}
