import React, { Component } from 'react';

import './Card.scss';

export default class Card extends Component {
  render() {
    return (
      <div className="card-details">
        <div className="card-header">
          <img
            alt="profile pic"
            src={this.props.photo}
            className="profile-pic"
          />
          <div className="card-header-text">
            <h3 className="card-header-text-name">{this.props.name}</h3>
            <p className="card-header-text-description">{this.props.title}</p>
          </div>
        </div>
        <q>{this.props.comment}</q>
      </div>
    );
  }
}
