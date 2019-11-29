import React, { Component } from 'react';

import img1 from '../../../assets/images/prototype/productImg1.png';
import img2 from '../../../assets/images/prototype/productImg2.png';
import img3 from '../../../assets/images/prototype/productImg3.png';
import img4 from '../../../assets/images/prototype/productImg4.png';

import './ProductShowcase.scss';

export default class ProductShowcase extends Component {
  render() {
    return (
      <div className="product">
        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Curate Your Remote Guide</h3>
            <p>
              Help new hires navigate your company & the world of remote work to
              help them get off to a flying start
            </p>
          </div>
          <div className="block__img">
            <img alt="Remote Guide" src={img4} className="block__img__bg" />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img
              alt="Mentorship Program"
              src={img3}
              className="block__img__bg"
            />
          </div>
          <div className="block__text">
            <h3>Mentorship Programme</h3>
            <p>
              Help your employees & teammates grow, both personally &
              professionally, with our guided mentorship programme
            </p>
          </div>
        </div>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>Team Retreats</h3>
            <p>
              Organise your team retreats - and learn how to run them
              effectively - with our team-driven planning tool
            </p>
          </div>
          <div className="block__img">
            <img alt="Team Retreats" src={img2} className="block__img__bg" />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img alt="Automate 1x1s" src={img1} className="block__img__bg" />
          </div>
          <div className="block__text">
            <h3>Automated 1x1s</h3>
            <p>
              Automatically set 1x1s through Slack or Google Calendar using our
              structured templates to help employees build a true connection
              with each other
            </p>
          </div>
        </div>
      </div>
    );
  }
}
