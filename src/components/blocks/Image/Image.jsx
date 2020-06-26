// @flow
import React, { Component } from 'react';

import './Image.scss';

type Props = {
  title: string,
  imgDesktop: string,
  imgMobile: string,
};

export default class Card extends Component<Props> {
  render() {
    const { title, imgDesktop, imgMobile } = this.props;

    return (
      <div className="imgFullWidth">
        <h3>{title}</h3>
        <picture>
          <source srcSet={imgDesktop} media="(min-width: 500px)" />
          <img alt="profile pic" src={imgMobile} />
        </picture>
      </div>
    );
  }
}
