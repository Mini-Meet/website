// @flow
import React, { Component } from 'react';
// import { Mixpanel } from '../../../Mixpanel';
// import { Button } from '../../elements';

import './Testimonial.scss';

type Props = {
  name: string,
  img: string,
  quote: string,
};

export default class Testimonial extends Component<Props> {
  render() {
    const { name, quote, img } = this.props;

    return (
      <div className="testimonial">
        <div className="testimonial__text">
          <div className="testimonial__header">
            <img alt="overview" src={img} className="testimonial__header_img" />
            <div className="testimonial__header_name">{name}</div>
          </div>
          <div className="testimonial__text_quote">
            <q>{quote}</q>
            <br />
          </div>
        </div>
      </div>
    );
  }
}
