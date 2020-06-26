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
        title: 'Product • Marketing',
        comment:
          'Product consultant & mentor with 20 years experience across B2B & B2C products.',
      },
      {
        photo: henry,
        name: 'Henry Latham',
        title: 'Product • Entrepreneurship',
        comment:
          '8 years Founder & Head of Product experience in early-stage startups. Author of "Why Your Startup is Failing" ',
      },
      {
        photo: elvis,
        name: 'Elvis Malkic',
        title: 'Growth • Acquisition',
        comment:
          'Results-driven FinTech, MarTech, Inbound & App Marketing Growth Hacker. ',
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
