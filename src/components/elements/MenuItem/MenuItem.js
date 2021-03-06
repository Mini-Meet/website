// @flow
import React, { Component } from 'react';
import './MenuItem.scss';

import { Icon } from '..';

type Props = {
  title: string,
  icon: string,
  onClick: Function,
  onIconClick: Function,
  itemActive?: boolean,
  disabled?: boolean,
  classOverride: string,
};

export default class MenuItem extends Component<Props> {
  render() {
    const {
      title,
      icon,
      onClick,
      onIconClick,
      disabled,
      classOverride,
      itemActive,
    } = this.props;

    const itemStatus = itemActive || disabled || 'itemInactive';

    return (
      <div className="item">
        <div
          className={`item__row ${String(itemStatus)} ${String(classOverride)}`}
        >
          <button
            onClick={onClick}
            className={`item__title ${String(itemStatus)}__title`}
          >
            {title}
          </button>
          <Icon
            icon={icon}
            onClick={onIconClick}
            inactive24="inactive24"
            classOverride={`item__icon ${String(itemStatus)}__icon`}
          />
        </div>
      </div>
    );
  }
}
