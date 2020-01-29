import React, { Component } from 'react';

import { SignUp } from '..';
import './HeroInvite.scss';

export default class Hero extends Component {
  render() {
    const firstHero = [
      {
        title: 'Master Product',
        titleTwo: 'Management',
        subtitle:
          'Join our exclusive closed community for Product Managers looking to accelerate their careers, double their salary & unlock the world of remote work',
      },
    ];

    const secondHero = [
      {
        title: 'Ready to transform your product career?',
        subtitle: 'Start seeing an impact in just 5 minutes today:',
      },
    ];

    const property = this.props.isFirstHero ? firstHero : secondHero;

    return (
      <div className="invite">
        {property.map(prop => {
          return (
            <div key={this.props.key}>
              <div className="invite__header">
                <h1>{prop.title}</h1>
                <h1>{prop.titleTwo}</h1>
                <p>{prop.subtitle}</p>
              </div>
            </div>
          );
        })}

        <SignUp />
      </div>
    );
  }
}
