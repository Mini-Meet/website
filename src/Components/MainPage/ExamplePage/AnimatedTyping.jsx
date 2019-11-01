import React, { Component } from 'react';
import Typing from 'react-typing-animation';

import './AnimatedTyping.scss'

export default  class AnimatedTyping extends Component {

render() {

  return (
       <div className='typing-text'>
         <h4 className='typing-header'>{this.props.question}</h4>
         <Typing onFinishedTyping={this.AfterType} loop={true}>
           <Typing.Delay ms={this.props.delay} />
           <Typing.Reset count={1} delay={this.props.delay} />
           <p className='typing-p'>{this.props.answer}</p>
         </Typing>
       </div>
  );
  }
}
