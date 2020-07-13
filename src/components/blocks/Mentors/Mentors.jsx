import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import dom from '../../../assets/images/mentors/dom.jpeg';
import henry from '../../../assets/images/mentors/henry.jpg';
import elvis from '../../../assets/images/mentors/elvis.jpeg';
import sofi from '../../../assets/images/mentors/sofi.jpeg';

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
          'Henry has 8 years of experience as a Founder & Head of Product with early-stage startups. He is the author of "Why Your Startup is Failing" & founder of the Prod MBA programme, where he teaches essential discovery & product operations skills to aspiring founders & ambitious product people.',
      },
      {
        photo: sofi,
        name: 'Sofi Newsham',
        title: '#product #scale',
        comment:
          'Sofi is a Senior Product Manager & Consultant with a wealth of experience across marketplace, finance and eCommerce. She has rocketed revenue by millions, increased signups by up to 10 times & boosted user reported satisfaction by 5 NPS points - and loves using data to shape the perfect customer journey.',
      },
      {
        photo: elvis,
        name: 'Elvis Malkic',
        title: '#growth #acquisition',
        comment:
          'Elvis is a results-driven FinTech, MarTech, Inbound & App Marketing Growth Hacker who has run over 400 growth experiments over the last 2 years. ',
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
