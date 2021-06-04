import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import alumni from '../../../assets/images/mentors/alumnimentors.png';
// import dom from '../../../assets/images/mentors/dom.jpeg';
import henry from '../../../assets/images/mentors/henry.jpg';
import ross from '../../../assets/images/mentors/ross.jpeg';

import Card from './Card/Card.jsx';

import './Mentors.scss';

export default class Mentors extends Component {
  render() {
    // NOTE: Testimonial Card Content
    const cards = [
      {
        photo: henry,
        name: 'Henry Latham',
        linkedIn: true,
        linkedinUrl: 'https://www.linkedin.com/in/henrylatham/',
        title: '#product #entrepreneurship',
        comment:
          'Henry has bootstrapped 2 businesses to profitability, mentored over 100 aspiring product leaders & is author of the book "Product Leadership Starts With You". He has worked in product for 9 years & writes daily on LinkedIn. ',
      },
      {
        photo: ross,
        name: 'Ross Webb',
        linkedIn: true,
        linkedinUrl: 'https://www.linkedin.com/in/rosswebb/',
        title: '#product #mindset',
        comment:
          'Ross has launched several successful products over a 20-year career, taking one from ideation to $50m turnover in 9 months, and managed others with a turnover of $500m. He has a background in therapy & is passionate about coaching aspiring product leaders.',
      },

      // {
      //   photo: dom,
      //   name: 'Dom Wolf',
      //   linkedIn: true,
      //   linkedinUrl: 'https://www.linkedin.com/in/~dom/',
      //   title: '#product #marketing',
      //   comment:
      //     'Dom is a senior product manager & strategy director with 11+ years of hands-on experience. With a marketing and product background, he`s an expert at building and growing award-winning platforms, mobile apps and websites.',
      // },
      {
        photo: alumni,
        name: 'Prod MBA Alumni',
        title: '#strategy #leadership #b2b #career',
        comment:
          'Our 7 alumni mentors work in senior product roles across Berlin & London. They will join some of the group sessions & workshops, as well as our alumni Circles.',
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
        <h2 className="mentors__header">Your Mentors</h2>
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
