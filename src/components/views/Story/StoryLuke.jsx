// @flow
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Story.scss';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { Header, Footer, ActiveCampaignForm, Stories } from '../../blocks';

// import thumbnail from '../../../assets/images/thumbnail.jpg';
import luke from '../../../assets/images/stories/luke.jpg';

const ctaHeader = 'Level-up Your Product Career';
const ctaSupportText =
  'Try the free 7-day Mini MBA to learn skills to fast-track your product career:';

const mixpanelEvent = '12. Luke Submit';
const facebookEvent = 'Search';

const formId = 1;

const title = 'How Luke Built A Profitable Product in 6 Weeks';

export default class StoryLuke extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    Mixpanel.track('12. Luke Page');
  }

  render() {
    return (
      <div className="storyPage">
        <Helmet>
          <title>{title}</title>
          <meta property="og:description" content={title} />
          <meta property="og:image" content={luke} />
          <meta property="og:url" content="https://prod.mba/story/luke" />
          <meta name="twitter:image" content={luke} />
          <meta name="twitter:card" content={luke} />
          <meta
            name="twitter:image:alt"
            content="Prod MBA Training Programme"
          />
        </Helmet>

        <Header darkWithCta onClick={this.handleBookCall} />
        <div className="storyPage__hero">
          <h1>{title}</h1>
        </div>
        <div className="storyPage__body">
          <img alt="Onboarding" src={luke} className="storyPage__body_img" />
          <h3>Stuck In A Feature Factory</h3>
          <p>
            In the past, I have felt stuck in my comfort zone & realised I
            needed to learn & develop my skills as a Product Manager.
          </p>
          <br />
          <p>
            To really experience what building product from start to revenue was
            really like.
          </p>
          <br />
          <p>
            In previous roles, I had usually become frustrated - stuck in a
            Feature Factory just pushing features that didn’t make sense - and
            used that as an excuse to stop learning.
          </p>
          <br />
          <p>At times, I felt my career was not progressing.</p>
          <br />
          <h3>Hands-On & Practical</h3>
          <p>The Prod MBA really changed this for me.</p>
          <br />
          <p>
            The hands-on, practical nature of the programme, combining good
            theory with pushing you to put theory into practice every single
            week, was so refreshing - and really powerful.
          </p>
          <br />
          <p>
            You’re really pushed to get through each stage of the product
            process - even when you’re doubting your idea - building your
            resilience & confidence along the journey.
          </p>
          <br />
          <h3>Generating Real Revenue</h3>
          <p>
            When my product actually generated revenue in Week 6, I realised how
            much I had progressed!
          </p>
          <br />
          <p>
            I realised I was able to take something from start to finish in 6-8
            weeks & achieve my initial goal of creating a revenue-generating
            product - whilst learning some new skills along the way.
          </p>
          <br />
          <h3>Continuing My Journey</h3>
          <p>
            Since finishing the programme, I’ve become a lot more aware of
            needing to work in the right environment to develop my skills so I
            can maximise my impact - and share those skills with others on my
            teams.
          </p>
          <br />
          <p>
            I am also continuing to work on my personalised coaching service to
            see where it leads & to continue building my product skills!
          </p>
          <br />
          <br />
          <p>_</p>
          <br />
          <p className="storyPage__about">
            <a
              href="https://www.linkedin.com/in/lukedemetriades/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luke
            </a>{' '}
            has worked as a London-based Product Manager for 6 years, currently
            at gohenry.
          </p>
          <div className="storyPage__signup">
            <h4 className="curriculum__cta">{ctaHeader}</h4>
            <p className="curriculum__small">{ctaSupportText}</p>
            <ActiveCampaignForm
              formId={formId}
              submitEmail={this.handleSubmitEmail}
            />
          </div>
        </div>
        <Stories header="All Alumni Stories" />
        <Footer page="HOME" />
      </div>
    );
  }

  handleSubmitEmail = () => {
    Mixpanel.track(`${mixpanelEvent}`);
    FacebookPixel.track(`${facebookEvent}`);
  };

  handleBookCall = () => {
    Mixpanel.track('12. Luke Book Call');
  };
}
