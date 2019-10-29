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


class ExamplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        typed: false,
    };
  }
  clicked = () => {
   console.log('clicked')
  this.setState({ typed: false})
  }

  whenTyped = (state) => {
    this.setState({ typed: state })
  }

render() {
    let typed = this.state.typed ? 'purple' : 'black'
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
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />
      }
    };

    return (
          <div>
            <div className='phone'>
              <div className='phone-text'>
            {questionsAndAnswers.map((qAndA) => {
              return (
              <Slider {...settings}>
                <AnimatedTyping
                      key={qAndA.question}
                      question={qAndA.question}
                      answer={ qAndA.answer}
                      whenTyped={this.whenTyped}
                      typed={this.state.typed}
                    />
              </Slider>)
               })}
               </div>
              <span className={typed} onClick={this.clicked}> {element}</span>
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
 export default ExamplePage;
