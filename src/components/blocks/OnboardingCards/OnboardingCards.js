// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { OnboardingCard } from '../../elements';

import './OnboardingCards.scss';

type OnboardingCardsProps = {
  onClick: Function,
  onboardingCards: object,
};

export default class OnboardingCards extends Component<Props> {
  render() {
    const { onClick, onboardingCards } = this.props;

    return (
      <div className="onboardingCards">
        <h2>What{`'`}s your biggest challenge?</h2>
        <div className="onboardingCards__cards">
          {onboardingCards.map(onboardingCard => {
            return (
              <OnboardingCard
                key="onboarding card"
                onClick={onClick}
                // onClick={this.handleCardClick.bind(this, onboardingCard)}
                img={onboardingCard.img}
                imgAlt={onboardingCard.imgAlt}
                title={onboardingCard.title}
              />
            );
          })}
        </div>
      </div>
    );
  }

  handleCardClick = (onboardingCard: OnboardingCardsProps) => {
    Mixpanel.track(`Onboarding: ${onboardingCard.title}`);
  };
}
