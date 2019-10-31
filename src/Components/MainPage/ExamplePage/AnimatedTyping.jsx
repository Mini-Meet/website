import React, { Component } from 'react';
import Typing from 'react-typing-animation';

export default  class AnimatedTyping extends Component {
render() {

  return (
       <div>
         <span>{this.props.question}</span>
         <Typing onFinishedTyping={this.AfterType} loop={true}>
          <Typing.Reset count={1} delay={100} />
          <p>{this.props.answer}</p>
         </Typing>
       </div>
  );
  }
}
