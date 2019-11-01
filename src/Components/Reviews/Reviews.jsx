import React, { Component } from "react";

import Card from './Card/Card.jsx'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';

import TimImage from '../../images/TimFerriss.png';
import SenecaImage from '../../images/Seneca.png';

import './Reviews.scss'


class Reviews extends Component {
render() {
    const reviewCards = [
      {
        photo: TimImage,
        name: 'Tim Ferriss',
        title: 'Author & entrepreneur',
        comment:'I ask myself these questions every morning to help me frame my day.'

      },

      {
        photo: SenecaImage,
        name: 'Seneca',
        title: 'Philosopher',
        comment:'I ask myself these questions every morning to help me frame my day.'

      },

      {
        photo: TimImage,
        name: 'Larry Ferris',
        title: 'Author, entrepreneur & philosopher',
        comment:'I ask myself these questions every morning to help me frame my day.'

      }

    ]
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
        <div className='review-cards'>
         <Slider {...settings}>
          {reviewCards.map((person) => {
            return (
              <Card
                className='card'
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
 export default Reviews;
