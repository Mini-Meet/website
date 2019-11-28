import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import customer1 from '../../../assets/images/testimonials/customer1.png';
import customer2 from '../../../assets/images/testimonials/customer2.png';
import customer3 from '../../../assets/images/testimonials/customer3.png';

import Card from './Card/Card.jsx';

import './Testimonials.scss';

export default class Testimonials extends Component {
  render() {
    // NOTE: Testimonial Card Content
    const cards = [
      {
        photo: customer1,
        name: 'John Smith',
        title: 'CEO, Remote.com',
        comment:
          'Key to building a strong remote team culture & keeping people productive, aligned &, most importantly, happy!',
      },

      {
        photo: customer2,
        name: 'Jane Smith',
        title: 'Remote Team Lead, Buffer',
        comment:
          'A great tool for building the soft side of team culture - the hard to pindown - such as building a human relationship with your remote colleagues',
      },

      {
        photo: customer3,
        name: 'Adam Smith',
        title: 'Head of HR, A Company',
        comment: 'Nice tool!',
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
