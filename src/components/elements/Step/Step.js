// @flow
import React, { Component } from 'react';
import './Step.scss';

type Props = {
  title: string,
  onClick: Function,
  itemActive?: boolean,
  disabled?: boolean,
  classOverride: string,
};

export default class Step extends Component<Props> {
  render() {
    const { title, onClick, disabled, classOverride, itemActive } = this.props;

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
        </div>
      </div>
    );
  }
}
