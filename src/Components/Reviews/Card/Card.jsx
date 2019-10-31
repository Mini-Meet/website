import React, {Component} from 'react'


import './Card.scss'


export default  class Card extends Component {
  render() {
    return (
      <div className='cardDetails'>
        <div className='cardNameImg'>
          <img src={this.props.photo} className='profilePic' />
          <h3>{this.props.name}</h3>
         </div>
        <span>{this.props.title}</span>
        <br />
        <span>{this.props.comment}</span>

      </div>
    );
  }
}


