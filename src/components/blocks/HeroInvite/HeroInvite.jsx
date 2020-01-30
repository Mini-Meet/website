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
          'Junior/mid-level PM? Learn how to double your salary & unlock remote work without spending $5k & months on a course with our toolkit for world-class product management',
      },
    ];

    const secondHero = [
      {
        title: 'Ready to transform your product career?',
        subtitle:
          'Start seeing an impact in just 5 minutes today & gradually build the right skill set to rapidly become a world-class Product Manager:',
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
