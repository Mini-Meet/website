import React, { Component } from 'react';
import './Hero.scss';

import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';

const CustomForm = () => {
  const submit = () => {
    Mixpanel.track('PM: Book Call (Footer)');
  };

  return (
    <a className="hero__cta" href="https://calendly.com/henry_latham">
      <Button primary onClick={submit}>
        Book Free Consultancy Call
      </Button>
    </a>
  );
};

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
    const { displayBtn } = this.props;

    return (
      <div className="hero">
        {property.map(prop => {
          return (
            <div key={this.props.key}>
              <div className="hero__header">
                <h1>{prop.title}</h1>
                <h1>{prop.titleTwo}</h1>
                <p>{prop.subtitle}</p>
                {displayBtn && <CustomForm />}
              </div>
            </div>
          );
        })}
        <iframe
          title="Video"
          src="https://www.videoask.com/fto26rekz"
          allow="camera; microphone; autoplay; encrypted-media;"
          width="100%"
          height="600px"
          className="hero__video"
        ></iframe>
      </div>
    );
  }
}
