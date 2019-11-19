import React, { Component } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import TimImage from '../../../assets/images/testimonials/TimFerriss.png';
import SenecaImage from '../../../assets/images/testimonials/Seneca.png';
import MarcusImage from '../../../assets/images/testimonials/Marcus.png';

import Card from './Card/Card.jsx'

import './Testimonials.scss'


export default class Testimonials extends Component {
render() {
  // NOTE: Testimonial Card Content
    const cards = [
      {
        photo: TimImage,
        name: 'Tim Ferriss',
        title: 'Author/Entrepreneur',
        comment:'"Questions I regularly ask myself: What if I did the opposite for 48 hours? What if this were easy? What if I could only subtract to solve problems?"'
      },

      {
        photo: SenecaImage,
        name: 'Seneca',
        title: 'Philosopher',
        comment:'"I will keep constant watch over myself and—most usefully—will put each day up for review. For this is what makes us evil—that none of us looks back upon our own lives."'
      },

      {
        photo: MarcusImage,
        name: 'Marcus Aurelius',
        title: 'Emperor of Rome',
        comment:'"If you can eliminate [what is not essential], you’ll have more time, and more tranquility. Ask yourself at every moment, "Is this necessary?""'
      }
    ]

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
        <div className='testimonials'>
         <Slider {...settings}>
          {cards.map((person) => {
            return (
              <Card
                className='testimonials__card'
                key={person.name}
                photo={person.photo}
                name={person.name}
                title={person.title}
                comment={person.comment}
              />)
             })}
         </Slider>
         </div>

          )
  }
 }
