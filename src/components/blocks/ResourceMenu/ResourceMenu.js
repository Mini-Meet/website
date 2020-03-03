// @flow
import React, { Component } from 'react';
import { MenuItem } from '../../elements';

import './ResourceMenu.scss';

type Props = {
  onMenuItemClick: Function,
  menuItems: Object, // TODO - define real props inside Object e.g. { title: string... }
};

type State = {
  activeItem: ?string,
};

type MenuItemProps = {
  id: string,
  title: string,
  onMenuItemClick: Function,
  menuItems: Object,
};

export default class ResourceMenu extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
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
    const { menuItems } = this.props;
    const { activeItem } = this.state;

    return (
      <div className="resourceMenu">
        <div className="resourceMenu__menu">
          <div className="resourceMenu__menu_list">
            {menuItems.map(menuItem => {
              const isActive = activeItem === menuItem.id;
              return (
                <MenuItem
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

  // handleMenuItemClick = (id: string) => {
  handleMenuItemClick = (menuItem: MenuItemProps) => {
    this.setState({
      activeItem: menuItem.id,
    });

    this.props.onMenuItemClick();
  };
}
