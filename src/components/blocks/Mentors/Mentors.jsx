import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import dom from '../../../assets/images/mentors/dom.jpeg';
import henry from '../../../assets/images/mentors/henry.jpg';
import elvis from '../../../assets/images/mentors/elvis.jpeg';

import Card from './Card/Card.jsx';

import './Mentors.scss';

export default class Mentors extends Component {
  render() {
    // NOTE: Testimonial Card Content
    const cards = [
      {
        photo: dom,
        name: 'Dom Wolf',
        title: '#product #marketing',
        comment:
          'Dom is a senior product manager & strategy director with 11+ years of hands-on experience. With a marketing and product background, he`s an expert at building and growing award-winning platforms, mobile apps and websites.',
      },
      {
        photo: henry,
        name: 'Henry Latham',
        title: '#product #entrepreneurship',
        comment:
          'Henry has 8 years of experience as a Founder & Head of Product with early-stage startups. He is the author of "Why Your Startup is Failing" & founder of the Prod MBA programme.',
      },
      {
        photo: elvis,
        name: 'Elvis Malkic',
        title: '#growth #acquisition',
        comment:
          'Results-driven FinTech, MarTech, Inbound & App Marketing Growth Hacker who has run over 400 growth experiments over the last 2 years. ',
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
        <h2 className="mentors__header">Our Mentors</h2>
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
              />
            );
          })}
        </Slider>
      </div>
    );
  }
}
