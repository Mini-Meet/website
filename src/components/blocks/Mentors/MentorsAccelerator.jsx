// @flow
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import rachel from '../../../assets/images/mentors/rachel.jpeg';
import henry from '../../../assets/images/mentors/henry.jpg';
import ross from '../../../assets/images/mentors/ross.jpeg';

import Card from './Card/Card.jsx';

import './Mentors.scss';

type Props = {
  headline: string,
};

export default class MentorsAccelerator extends Component<Props> {
  render() {
    const { headline } = this.props;
    // NOTE: Testimonial Card Content
    const cards = [
      {
        photo: ross,
        name: 'Ross Webb',
        linkedIn: true,
        linkedinUrl: 'https://www.linkedin.com/in/rosswebb/',
        title: '#product #career',
        comment:
          'Ross has launched several successful products over a 20-year career, taking one from ideation to $50m turnover in 9 months, and managed others with a turnover of $500m. He has a background in therapy & is passionate about coaching aspiring product leaders.',
      },

      {
        photo: rachel,
        name: 'Rachel Hamlin',
        linkedIn: true,
        linkedinUrl: 'https://www.linkedin.com/in/rachelhamlin/',
        title: '#career #product',
        comment:
          'Rachel helps people who are successful on paper to heal patterns of burnout and create holistic success. She focuses on creating new ways of being that radically shift their relationship to their work and enable not only presence and focus, but results.',
      },
      {
        photo: henry,
        name: 'Henry Latham',
        linkedIn: true,
        linkedinUrl: 'https://www.linkedin.com/in/henrylatham/',
        title: '#product #entrepreneurship',
        comment:
          'Henry has bootstrapped 2 businesses to profitability, mentored over 150 aspiring product leaders & is author of the book "Product Leadership Starts With You". He has worked in product for 9 years & writes daily on LinkedIn. ',
      },
    ];

    // Slick Carousal Default Settings
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };

    return (
      <div className="mentors">
        <h2 className="mentors__header">{headline}</h2>
        <Slider {...settings}>
          {cards.map(person => {
            return (
              <Card
                className="mentors__card"
                key={person.name}
                photo={person.photo}
                name={person.name}
                title={person.title}
                comment={person.comment}
                linkedinUrl={person.linkedinUrl}
                linkedIn={person.linkedIn}
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}
