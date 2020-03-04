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
          'Putting the theory of concepts like product strategy into practice, with the guidance of mentors, has been absolutely invaluable',
      },
      {
        photo: customer2,
        name: 'Rebeca Casa',
        title: 'Junior Product Manager, HeyCater',
        comment:
          'The autonomy I have gained from moving away from project management towards a true product management role has been really rewarding',
      },
      {
        photo: customer1,
        name: 'Mark Sarifidis',
        title: 'Product Lead, Growth Media',
        comment:
          'We read The Lean Startup, Hacking Growth, etc, but never really worked out how to apply the principles of lean experimentation & measuring impact - until now',
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
