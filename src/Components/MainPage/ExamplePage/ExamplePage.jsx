import React, { Component } from "react";
import AnimatedTyping from './AnimatedTyping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown} from '@fortawesome/free-solid-svg-icons'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MagicSliderDots from 'react-magic-slider-dots';


import './ExamplePage.scss'

const element = <FontAwesomeIcon icon={faChevronDown} />


export default  class ExamplePage extends Component {
render() {
    const questionsAndAnswers = [
      {
        question: 'How are you today ?',
        answer: 'Good, thanks'
      },
      {
        question: 'What have you done today ?',
        answer: 'Well, today I have bla, bla,bla,blaaa!'
      },
      {
        question: 'What are you doing to improve your day?',
        answer:'I am working on this project'
      }
     ]
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={20} />
      }
    };

    return (
          <div className='examplePageDiv'>
            <div className='phone'>
              <div className='phone-text'>
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
            <ol>
              <li>Morning & evening questions to frame & reflect on your day</li>

              <li>Customise your questions</li>

              <li> Review your day, week, month & even year</li>
            </ol>
          </div>
          )
  }
 }

