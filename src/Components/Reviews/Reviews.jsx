import React, { Component } from "react";

import Card from './Card/Card.jsx'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';

import TimImage from '../../images/TimFerriss.png';
import SenecaImage from '../../images/Seneca.png';
import MarcusImage from '../../images/Marcus.png';

import './Reviews.scss'


export default  class Reviews extends Component {
render() {
    const reviewCards = [
      {
        photo: TimImage,
        name: 'Tim Ferriss',
        title: 'Author/Entrepreneur',
        comment:'Questions I regularly ask myself: What if I did the opposite for 48 hours? What if this were easy? What if I could only subtract to solve problems?'

      },

      {
        photo: SenecaImage,
        name: 'Seneca',
        title: 'Philosopher',
        comment:'I will keep constant watch over myself and—most usefully—will put each day up for review. For this is what makes us evil—that none of us looks back upon our own lives.'

      },

      {
        photo: MarcusImage,
        name: 'Marcus Aurelius',
        title: 'Emperor of Rome',
        comment:'If you can eliminate [what is not essential], you’ll have more time, and more tranquility. Ask yourself at every moment, "Is this necessary?"'

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
        <div className='reviewCards'>
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
