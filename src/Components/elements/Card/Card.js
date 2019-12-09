// @flow
import React, { Component } from 'react';
import './Card.scss';

type Props = {
  onClick: Function,
  children: string,
  card__active?: boolean,
  card__modal?: boolean,
  card__disabled?: boolean,
};

export default class Card extends Component<Props> {
  render() {
    const {
      onClick,
      children,
      card__active,
      card__modal,
      card__disabled,
    } = this.props;
    const cardType =
      card__active || card__modal || card__disabled || 'card__default';

    return (
      <div onClick={onClick} className="card" role="presentation">
        <div className={cardType}>{children}</div>
      </div>
    );
  }
}
