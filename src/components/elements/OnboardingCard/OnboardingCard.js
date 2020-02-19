// @flow
import React, { Component } from 'react';
import './OnboardingCard.scss';

import { Icon, Card } from '..';

type Props = {
  onClick: Function,
  img: string,
  imgAlt: string,
  title: string,
};

export default class OnboardingCard extends Component<Props> {
  render() {
    const { onClick, img, imgAlt, title } = this.props;

    return (
      <div className="onboardingCard">
        <Card onClick={onClick}>
          <div className="onboardingCard__img">
            <img alt={imgAlt} src={img} className="onboardingCard__img_img" />
          </div>
          <h4 className="onboardingCard__title">{title}</h4>
          <div className="onboardingCard__btn">
            <Icon
              icon="arrow_right_alt"
              inactive16="inactive16"
              classOverride="onboardingCard__icon"
            />
          </div>
        </Card>
      </div>
    );
  }
}
