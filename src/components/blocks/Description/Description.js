// @flow
import React, { Component } from 'react';
// import { Mixpanel } from '../../../Mixpanel';
// import { Button } from '../../elements';

import overview from '../../../assets/images/course/curriculum_overview.png';

import './Description.scss';

type Props = {
  header: string,
  description1: string,
  description2: string,
  // btnText: string,
  // url: string,
  // mixpanelEvent: string,
};

export default class Description extends Component<Props> {
  render() {
    const { header, description1, description2 } = this.props;

    return (
      <div className="description">
        <div className="description__text">
          <h3 className="description__text_header">{header}</h3>
          <div className="description__text_main">
            <p>{description1}</p>
            <br />
            <p>{description2}</p>
            {
              //   <div className="hero__typeform">
              //   <a href={url} target="_blank" rel="noopener noreferrer">
              //     <Button onClick={this.goToApplicationPage}>{btnText}</Button>
              //   </a>
              // </div>
            }
          </div>
        </div>

        <div className="description__imgblock">
          <img
            alt="overview"
            src={overview}
            className="description__imgblock_img"
          />
        </div>
      </div>
    );
  }

  goToApplicationPage = () => {
    // Mixpanel.track(`'MBA / Course / ${this.props.mixpanelEvent}`);
  };
}
