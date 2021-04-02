// @flow
import React, { Component } from 'react';
import LinkedIn from '../../../../assets/images/partners/partner_linkedin.svg';

import './Card.scss';

type Props = {
  photo: string,
  name: string,
  linkedinUrl: string,
  linkedIn: boolean,
  title: string,
  comment: string,
};

export default class Card extends Component<Props> {
  render() {
    const { photo, name, linkedinUrl, linkedIn, title, comment } = this.props;

    return (
      <div className="card-details">
        <div className="card-header">
          <img alt="profile pic" src={photo} className="profile-pic" />
          <div className="card-header-text">
            <div className="card-header-texthead">
              <h4 className="card-header-text-name">{name}</h4>
              {linkedIn && (
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    alt="linkedin"
                    src={LinkedIn}
                    className="card-header-linkedin"
                  />
                </a>
              )}
            </div>
            <p className="card-header-text-description">{title}</p>
          </div>
        </div>
        <q>{comment}</q>
      </div>
    );
  }
}
