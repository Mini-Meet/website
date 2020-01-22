import React, { Component } from 'react';

import { SignUp } from '..';
import './Hero.scss';

export default class Hero extends Component {
  render() {
    const firstHero = [
      {
        title: 'Build a world-class',
        titleTwo: 'remote team',
        subtitle:
          'Effortlessly create a more productive, more connected remote team using the tools & tactics of the world’s best',
      },
    ];

    const secondHero = [
      {
        title: 'Ready to level up your team culture?',
        subtitle: 'Start building world-class remote culture today:',
      },
    ];

    const property = this.props.isFirstHero ? firstHero : secondHero;

    return (
      <div className="hero">
        {property.map(prop => {
          return (
            <div key={this.props.key}>
              <div className="hero__header">
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
