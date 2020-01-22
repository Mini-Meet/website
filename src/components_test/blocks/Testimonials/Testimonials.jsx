import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import customer1 from '../../../assets/images/testimonials/mark.jpeg';
import customer2 from '../../../assets/images/testimonials/rebeca.jpeg';
import customer3 from '../../../assets/images/testimonials/craig.png';

import Card from './Card/Card.jsx';

import './Testimonials.scss';

export default class Testimonials extends Component {
  render() {
    // NOTE: Testimonial Card Content
    const cards = [
      {
        photo: customer3,
        name: 'Craig Lawson',
        title: 'Product Manager, Sift',
        comment:
          'Remote work can be challenging, but Remoto has really helped us to stay connected, to focus on a common goal & to really feel like a team.',
      },
      {
        photo: customer2,
        name: 'Rebeca Casa',
        title: 'Lead Dev, HeyCater',
        comment:
          'A really valuable tool for anyone looking to improve how they work remotely or manage remote teams without a massive time commitment!',
      },
      {
        photo: customer1,
        name: 'Mark Sarifidis',
        title: 'Head of Product, Growth Media',
        comment:
          'Working with Remoto has helped my team become more connected, more organised &, most importantly, deliver better results.',
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
      <div className="testimonials">
        <h2 className="testimonials__header">Happy Customers</h2>
        <Slider {...settings}>
          {cards.map(person => {
            return (
              <Card
                className="testimonials__card"
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
