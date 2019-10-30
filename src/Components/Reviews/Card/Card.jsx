import React, {Component} from 'react'


import './Card.scss'


class Card extends Component {
  render() {
    return (
      <div className='card-details'>
        <div className='card-name-img'>
          <img src={this.props.photo} className='profile-pic' />
          <h3>{this.props.name}</h3>
         </div>
        <span>{this.props.title}</span>
        <br />
        <span>{this.props.comment}</span>

      </div>
    );
  }
}

export default Card;
