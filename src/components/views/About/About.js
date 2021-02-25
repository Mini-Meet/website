// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { Helmet } from 'react-helmet';

import { Header, Footer } from '../../blocks';
import { ButtonNextPage } from '../../elements';
import portrait from '../../../assets/images/course/henry-portrait.jpg';

import thumbnail from '../../../assets/images/thumbnail.jpg';

import './About.scss';

const url = 'https://test.prod.mba/';

export default class About extends Component<Props> {
  componentDidMount() {
    Mixpanel.track('MBA / About');
  }

  render() {
    return (
      <div className="aboutContainer">
        <Helmet>
          <title>Prod MBA • About</title>
          <meta
            property="og:description"
            content="Prod MBA was founded to provide hands-on, tactical training to fast-track your product career."
          />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:url" content="https://prod.mba" />
          <meta name="twitter:image" content={thumbnail} />
          <meta name="twitter:card" content={thumbnail} />
          <meta
            name="twitter:image:alt"
            content="Prod MBA Training Programme"
          />
        </Helmet>

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
              first business whilst on a solo trip down the Amazon river & has
              bootstrapped two businesses to profitability.
            </p>
            <p>
              Now, he is lead mentor at Prod MBA, helping Product Managers &
              Owners accelerate their career by teaching them the one key skill
              to building great products. He has personally managed a variety of
              B2C/B2B product teams in London, Berlin, Lisbon & São Paulo over
              the last 8 years in the industry.
            </p>
            <p>
              Henry{"'"}s clients range from Heads of Products to Junior PMs &
              aspiring founders, all with a common goal to learn the skills to
              building great products & rapidly level up their product career.{' '}
            </p>

            <div className="hero__nextpage">
              <ButtonNextPage
                nextPageUrl={url}
                onClick={this.goToNextPage}
                btnText="Assess Your Product Skills"
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
    Mixpanel.track('MBA / About Next');
  };

  // goToAboutCaseStudy = () => {
  //   Mixpanel.track('Course / About / Click Case Study');
  // };
}
