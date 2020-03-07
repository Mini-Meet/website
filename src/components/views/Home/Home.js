import React, { Component } from 'react';
import CookieBanner from 'react-cookie-banner';
import { Link } from 'react-router-dom';

import { Mixpanel } from '../../../Mixpanel';
import {
  Banner,
  Footer,
  Header,
  Hero,
  Featured,
  ProductShowcase,
  Testimonials,
} from '../../blocks';
import './Home.scss';

// Product Showcase Images
import imgCourse from '../../../assets/images/prototype/product_course.png';
import imgCourse101 from '../../../assets/images/prototype/product_course101.png';
import imgTribe from '../../../assets/images/prototype/product_tribe.png';
import imgMentors from '../../../assets/images/prototype/product_mentors.png';
// import imgStrategy from '../../../assets/images/prototype/product_strategy.png';
// import imgGuide from '../../../assets/images/prototype/product_guide.png';
// import imgRemote from '../../../assets/images/prototype/product_remote.png';
// import imgOnboarding from '../../../assets/images/prototype/product_onboarding.png';
// import imgStandup from '../../../assets/images/prototype/product_standup.png';
// import imgSprints from '../../../assets/images/prototype/product_sprints.png';
// import imgRetro from '../../../assets/images/prototype/product_retro.png';
// import imgTools from '../../../assets/images/prototype/product_tools.png';

export default class LinkedIn extends Component {
  componentDidMount() {
    Mixpanel.track('B / Home');
  }

  render() {
    return (
      <div className="homePageWrapper">
        <Header light />
        <div id="signup" />
        <Hero
          title="Master Product"
          titleTwo="Management"
          subtitle="Junior/Mid-Level PM? Learn how to build great products that solve real problems, without spending $5k & months on an ineffective course. Join our Product Mastery Programme today:"
          btnText="Join Waiting List"
          mixpanelEvent="Home / Subscribed!"
          referralForm
        />
        <Banner
          header="50% Off Our Intro Training This Week!"
          blockHeader="Try our Product Management 101 Course"
          blockBody="In 12 lessons, learn how to build great products with our intro to product strategy & building effective product teams. For a short time only, we're offering 50% off! Use coupon code 50%OFF at checkout"
          blockImage={imgCourse101}
          btnText="See Course Curriculum"
          onClick={this.handleBannerBtnClick}
          url="https://courses.productmastery.co/"
        />
        <Featured header="Where our Product Masters Work" />
      </div>
    );
  }
  handleBannerBtnClick = () => {
    Mixpanel.track('B / Page / PM101');
  };
}
