import React, { Component } from "react";
import AnimatedTyping from './AnimatedTyping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';


import './ExamplePage.scss'

const element = <FontAwesomeIcon icon={faCaretDown} />


export default  class ExamplePage extends Component {
render() {
    const questionsAndAnswers = [
      {
        question: 'What is the most important thing you could achieve today?',
        answer: 'I need to focus on the one thing that will get me closer to achieving my goals.'
      },
      {
        question: 'Why is this one thing so important?',
        answer: 'I could focus on other things on my to-do list, but maybe they don`t matter'
      },
      {
        question: 'How will you make time for it?',
        answer:'Blocking out the first 90 minutes of my morning.'
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
          <div className='example-page-container'>
            <div className='phone-frame'>
              <div className='phone-frame-text'>
               <Slider {...settings}>
                {questionsAndAnswers.map((qAndA) => {
                  return (
                    <AnimatedTyping
                          key={qAndA.question}
                          question={qAndA.question}
                          answer={ qAndA.answer}
                        />)
                   })}
               </Slider>
               </div>
            </div>
            <ol className='example-page-list'>
              <li className='example-page-list-item'>Morning & evening questions to frame & reflect on your day</li>

              <li className='example-page-list-item'>Customise your questions</li>

              <li className='example-page-list-item'> Review your day, week, month & even year</li>
            </ol>
          </div>
          )
  }
 }

