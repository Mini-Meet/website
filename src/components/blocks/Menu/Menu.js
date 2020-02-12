// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { MenuItem } from '../../elements';

import './Menu.scss';

type Props = {
  // handleMenuItemClick: Function,
  onIconClick: Function,
};

export default class Menu extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      hideMenu: false,
      itemActive: false,
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
    const { onIconClick } = this.props;
    const { hideMenu, itemActive } = this.state;

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
    const icon = hideMenu ? 'keyboard_arrow_left' : 'close';
    const menuStyles = hideMenu ? 'menuClosed' : 'menuOpen';

    return (
      <div className="container">
        <div
          className={`${menuStyles}__btn`}
          onClick={this.onRevealMenu.bind(this)}
        >
          <i className={`${menuStyles}__btn_icon material-icons`}>{icon}</i>
        </div>

        <div className={`${menuStyles}__menu`}>
          <div className={`${menuStyles}__menu_label`}>Menu</div>
          <div className={`${menuStyles}__menu_list`}>
            {menuItems.map(menuItem => {
              return (
                <MenuItem
                  key={menuItem.id}
                  title={menuItem.title}
                  icon={menuItem.icon}
                  onClick={this.handleMenuItemClick}
                  itemActive={itemActive}
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

    Mixpanel.track(`Menu = ${hideMenu}`);
  };

  handleMenuItemClick = () => {
    const { itemActive } = this.state;
    this.setState({
      itemActive: !itemActive,
    });
  };
}
