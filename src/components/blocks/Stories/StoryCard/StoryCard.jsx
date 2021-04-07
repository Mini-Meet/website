import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../elements';

import './StoryCard.scss';

export default class storyCard extends Component {
  render() {
    return (
      <div className="storyCard">
        <div className="storyCard__hero">
          <img
            alt="profile pic"
            src={this.props.icon}
            className="storyCard__hero_image"
          />
          <h5 className="storyCard__hero_text">{this.props.title}</h5>
        </div>
        <div className="storyCard__header">
          <img
            alt="profile pic"
            src={this.props.profile}
            className="storyCard__header_profile"
          />
          <div className="storyCard__header_text">
            <p className="storyCard__header_textName">{this.props.name}</p>
            <p className="storyCard__header_textRole">{this.props.role}</p>
          </div>
        </div>
        <p className="storyCard__quote">{this.props.quote}</p>
        <div className="storyCard__cta">
          <Link to={this.props.url}>
            <Button tertiary="tertiary" onClick={this.goToNextPage}>
              Read Full Story
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
