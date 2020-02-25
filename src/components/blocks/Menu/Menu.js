// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { MenuItem } from '../../elements';

import './Menu.scss';

type Props = {
  onIconClick: Function,
  menuItems: Object, // TODO - define real props inside Object e.g. { title: string... }
};

type State = {
  hideMenu: boolean,
  activeItem: ?string,
};

type MenuItemProps = {
  id: string,
  title: string,
  icon: string,
  menuItems: Object, // TODO - define real props inside Object e.g. { title: string... }
};

export default class Menu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hideMenu: false,
      activeItem: null,
    };
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  componentWillMount() {
    // check writing prompts enabled or disabled
    // const enableWritingPrompts = persistedStore.get(WRITING_PROMPTS_ENABLED)
    // if (enableWritingPrompts) {
    //  this.setState({ menuHidden: true, revealMenu: false  })
    // }
  }

  render() {
    const { onIconClick, menuItems } = this.props;
    const { hideMenu, activeItem } = this.state;

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
                <MenuItem
                  key={menuItem.id}
                  title={menuItem.title}
                  icon={isActive ? 'add' : 'keyboard_arrow_right'}
                  onClick={this.handleMenuItemClick.bind(this, menuItem)}
                  // onClick={this.handleMenuItemClick.bind(this, menuItem.id)}
                  itemActive={isActive}
                  onIconClick={onIconClick}
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

  // handleMenuItemClick = (id: string) => {
  handleMenuItemClick = (menuItem: MenuItemProps) => {
    this.setState({
      activeItem: menuItem.id,
    });
  };
}
