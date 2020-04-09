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
          'We have always struggling aligning leadership around clear objectives & communicating those to our product leads - until running our first workshop!',
      },
      {
        photo: customer2,
        name: 'Rebeca Casa',
        title: 'Junior Product Manager, HeyCater',
        comment:
          'I love the autonomy that has come from having a crystal clear objective & buy-in from management on which features we are testing.',
      },
      {
        photo: customer1,
        name: 'Mark Sarifidis',
        title: 'Product Lead, Growth Media',
        comment:
          'We read The Lean Startup & Hacking Growth, but never worked out how to apply the principles in practice. Workshops & their ongoing support have been a huge help.',
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
