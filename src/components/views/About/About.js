// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';

import { Header, Footer } from '../../blocks';
import { ButtonNextPage } from '../../elements';
import portrait from '../../../assets/images/course/henry-portrait.jpg';

import './About.scss';

const url = '/case-study';

export default class About extends Component<Props> {
  componentDidMount() {
    Mixpanel.track('7. About');
  }

  render() {
    return (
      <div className="aboutContainer">
        <Header dark />
        <h1>About</h1>
        <div className="about">
          <div className="about__img">
            <img alt="Onboarding" src={portrait} className="about__img__bg" />
          </div>
          <div className="about__text">
            <h4>Henry Latham</h4>
            <br />
            <p>
              Henry Latham is an entrepreneur from London, UK, who started his
              first business whilst on a solo trip down the Amazon river.
            </p>
            <p>
              Henry is a product management consultant who helps Product
              Managers accelerate their career by teaching them the one key
              skill to building great products. He has personally managed a
              variety of B2C/B2B product teams in London, Berlin, Lisbon & São
              Paulo over the last 8 years in the industry.
            </p>
            <p>
              Henry{"'"}s clients work for anything from early-stage startups to
              corporates, with a common goal to learn the skills to building
              great products & rapidly level up their product career.{' '}
            </p>

            <div className="hero__nextpage">
              <ButtonNextPage
                nextPageUrl={url}
                onClick={this.goToNextPage}
                btnText="Get Free Case Study >"
              />
            </div>
            {
              // <Link to="/case-study">
              //   <Button onClick={this.goToAboutCaseStudy}>FREE Case Study</Button>
              // </Link>
            }
          </div>
        </div>

        <Footer page="ABOUT" />
      </div>
    );
  }

  goToNextPage = () => {
    Mixpanel.track('7. About Next');
  };

  // goToAboutCaseStudy = () => {
  //   Mixpanel.track('Course / About / Click Case Study');
  // };
}
