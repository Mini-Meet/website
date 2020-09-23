// @flow
import React, { Component } from 'react';
import LinkedInTag from 'react-linkedin-insight';
import { Mixpanel } from '../../../Mixpanel';
import { FacebookPixel } from '../../../FacebookPixel';
import { Button } from '../../elements';

import brochurePdf from '../../../assets/pdf/prod-mba-brochure.pdf';

import './Booking.scss';

export default class Booking extends Component<Props> {
  componentDidMount() {
    Mixpanel.track('6. Book Page');
    //
    // const head = document.querySelector('head');
    // const script = document.createElement('script');
    // script.setAttribute(
    //   'src',
    //   'https://assets.calendly.com/assets/external/widget.js'
    // );
    // head.appendChild(script);
  }

  render() {
    return (
      <div className="overlay">
        <div className="overlay__content">
          <div className="overlay__content_video wistia_responsive_padding">
            <div className="wistia_responsive_wrapper">
              <span className="wistia_embed wistia_async_hziirxzwao popover=true popoverAnimateThumbnail=true videoFoam=true">
                &nbsp;
              </span>
            </div>
          </div>
          <p>
            Now that you’ve touched the surface with our case study above, if
            you feel ready to step up & rapidly become a true product leader,
            book a strategy session with us to see how we can help:
          </p>
          <a
            href="https://calendly.com/henry_latham/prod-mba"
            className="overlay__content_cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button onClick={this.goToBookSession}>
              Book Free Strategy Session
            </Button>
          </a>
          <a href={brochurePdf} target="_blank" rel="noopener noreferrer">
            <Button tertiary="tertiary" onClick={this.goToPdf}>
              View Prod MBA Brochure
            </Button>
          </a>
        </div>
        {
          // <div>
          //   <Header light />
          //   <div className="booking">
          //     <div
          //       className="calendly-inline-widget booking__widget"
          //       data-url="https://calendly.com/henry_latham/prod-mba"
          //     ></div>
          //   </div>
          // </div>
        }
      </div>
    );
  }

  goToBookSession = () => {
    Mixpanel.track('6. Book / Book Call');
    FacebookPixel.track('SubmitApplication');
    LinkedInTag.track('2862329');
  };

  goToPdf = () => {
    Mixpanel.track('6. Book / View PDF');
    FacebookPixel.track('Lead');
  };
}
