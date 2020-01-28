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
          'Product Mastery has really helped me dramatically improve how I communicate, motivate & organise my team. All the content & tools are practical & easy-to-apply.',
      },
      {
        photo: customer2,
        name: 'Rebeca Casa',
        title: 'Junior Product Manager, HeyCater',
        comment:
          'You can tell the team behind Product Mastery really knows their stuff, focusing on what work & learning how to adapt when in the day-to-day of a busy startup.',
      },
      {
        photo: customer1,
        name: 'Mark Sarifidis',
        title: 'Product Lead, Growth Media',
        comment:
          'Within minutes of working with Product Mastery, I felt like I had a clear grasp on the vision, direction & organisation of my team that had been missing from the start.',
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
