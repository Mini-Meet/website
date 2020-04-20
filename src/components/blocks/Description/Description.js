// @flow
import React, { Component } from 'react';
// import { Mixpanel } from '../../../Mixpanel';
// import { Button } from '../../elements';

import './Description.scss';

type Props = {
  header: string,
  description: string,
  // btnText: string,
  // url: string,
  // mixpanelEvent: string,
};

export default class Description extends Component<Props> {
  render() {
    const { header, description } = this.props;

    return (
      <div className="description">
        <div className="description__content">
          <h3 className="description__content_header">{header}</h3>
          <div className="description__content_main">
            <p>{description}</p>
            {
              //   <div className="hero__typeform">
              //   <a href={url} target="_blank" rel="noopener noreferrer">
              //     <Button onClick={this.goToApplicationPage}>{btnText}</Button>
              //   </a>
              // </div>
            }
          </div>
        </div>
      </div>
    );
  }

  goToApplicationPage = () => {
    // Mixpanel.track(`'MBA / Course / ${this.props.mixpanelEvent}`);
  };
}
