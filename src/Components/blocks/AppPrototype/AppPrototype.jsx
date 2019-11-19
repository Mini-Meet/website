import React, { Component } from "react";
import AnimatedTyping from './AnimatedTyping'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';


import './AppPrototype.scss'


export default  class AppPrototype extends Component {
render() {
    const questionsAndAnswers = [
      {
        question: 'What is the most important thing you could achieve today?',
        answer: 'I need to focus on the one thing that will get me closer to achieving my goals.',
        delay: 1000
      },
      {
        question: 'Why is this one thing so important?',
        answer: 'I could focus on other things on my to-do list, but maybe they don`t matter',
        delay: 7000
      },
      {
        question: 'How will you make time for it?',
        answer:'Blocking out the first 90 minutes of my morning.',
        delay: 10000
      }
     ]
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 1000,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={20} />
      }
    };

    return (
          <div className='product'>
            <div className='phone'>
              <div className='phone__text'>
               <Slider {...settings}>
                {questionsAndAnswers.map((qAndA) => {
                  return (
                    <AnimatedTyping
                          key={qAndA.question}
                          question={qAndA.question}
                          answer={ qAndA.answer}
                          delay={qAndA.delay}
                        />)
                   })}
               </Slider>
               </div>
            </div>
            <ol className='product__list'>
              <li className='product__list_item'>Morning & evening questions to frame & reflect on your day</li>

              <li className='product__list_item'>Customise your questions</li>

              <li className='product__list_item'> Review your day, week, month & even year</li>
            </ol>
          </div>
          )
  }
 }
