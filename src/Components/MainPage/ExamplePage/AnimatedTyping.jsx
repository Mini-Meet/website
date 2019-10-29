import React, { Component } from 'react';
import Typing from 'react-typing-animation';

class AnimatedTyping extends Component {
   constructor(props) {
    super(props);
    this.state = {
      newAnswer: null
    }
  }

  AfterType = () => {
    this.props.whenTyped(true)
  }

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
export default AnimatedTyping
