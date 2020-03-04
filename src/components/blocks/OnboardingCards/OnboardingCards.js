// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { OnboardingCard } from '../../elements';

import './OnboardingCards.scss';

type OnboardingCardProps = Object; // TODO - define real props inside Object e.g. { title: string... }

type Props = {
  onClick: Function,
  onboardingCards: Array<OnboardingCardProps>, // TODO - define real props inside Object e.g. { title: string... }
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

  handleCardClick = (onboardingCard: OnboardingCardProps) => {
    Mixpanel.track(`Onboarding: ${onboardingCard.title}`);
  };
}
