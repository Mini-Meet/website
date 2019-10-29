import React, { Component } from "react";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';

import Entrepreneur from '../../images/Entrepreneur.png';
import Entrepreneur1 from '../../images/Entrepreneur.png';
import Entrepreneur2 from '../../images/Entrepreneur.png';

import './Reviews.scss'


class Reviews extends Component {
render() {
    const reviewCards = [Entrepreneur, Entrepreneur1, Entrepreneur2]
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={20} />
      }
    };

    return (
        <div className='review-cards'>
         <Slider {...settings}>
          {reviewCards.map((card) => {
            return (
              <img src={card}  className='card'/>)
             })}
         </Slider>
         </div>

          )
  }
 }
 export default Reviews;
