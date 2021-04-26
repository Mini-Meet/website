// @flow
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Story.scss';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { Header, Footer, ActiveCampaignForm, Stories } from '../../blocks';

// import thumbnail from '../../../assets/images/thumbnail.jpg';
import richard from '../../../assets/images/stories/richard.jpg';

const ctaHeader = 'Level-up Your Product Career';
const ctaSupportText =
  'Try the free 7-day Mini MBA to learn skills to fast-track your product career:';

const mixpanelEvent = '12. Richard Submit';
const facebookEvent = 'StartTrial'; // Search

const formId = 1;

const title = 'How Richard Aligned His Org Around a Billion Dollar Idea';

export default class StoryRichard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    Mixpanel.track('12. Richard');
  }

  render() {
    return (
      <div className="storyPage">
        <Helmet>
          <title>{title}</title>
          <meta property="og:description" content={title} />
          <meta property="og:image" content={richard} />
          <meta property="og:url" content="https://prod.mba/story/richard" />
          <meta name="twitter:image" content={richard} />
          <meta name="twitter:card" content={richard} />
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
          <img alt="Onboarding" src={richard} className="storyPage__body_img" />
          <h3>No Strategy. No Focus.</h3>
          <p>
            Before Prod MBA, even as a Head of Product I used to try to do too
            much: Build every feature, please every stakeholder & lacked a clear
            strategy to deliver value to customers & to the business.
          </p>
          <br />
          <p>
            Instead of finding a niche, trying to understand their problems, we
            would try to build for 10 different user personas - and have no
            impact with our products.
          </p>
          <br />
          <p>
            Instead of launching a simple value proposition to understand your
            market needs & gather valuable learnings, we would jump straight to
            building a long, complicated roadmap & endless list of features.
          </p>
          <br />
          <p>
            Instead of focusing around a product strategy, we would try to do a
            bit of everything & just said “yes” to any stakeholder request.
          </p>
          <br />
          <h3>No Impact</h3>
          <p>
            I used to get so frustrated building things that didn’t seem to make
            much sense, then getting frustrated with marketing or other parts of
            the business & blaming them for “acquiring the wrong users”.
          </p>
          <br />
          <p>
            We never seemed to be building the right thing & struggled to have
            any impact.
          </p>
          <br />
          <h3>Product Is Not About Features</h3>
          <p>
            The Prod MBA radically changed how I viewed product, realising that
            a product is not a list of features, but the whole customer
            experience.
          </p>
          <br />
          <p>
            And that the key to product success was to stop worrying about
            things like our development speed or roadmap.
          </p>
          <br />
          <p>
            Instead, I realised - and experienced - the need to just get out
            there, start talking to a specific group of customers and start
            crafting a vision, strategy and experiments around those customers.
          </p>
          <br />
          <h3>Uncovering Product Opportunities</h3>
          <p>
            I actually generated revenue on the programme, which was really
            exciting with a product community concept.
          </p>
          <br />
          <p>
            However, the real value for me as a Product Lead has been to craft a
            product strategy - and put it into action - within my company.
          </p>
          <br />
          <p>
            Using the MVO framework Henry taught us, we moved from lack of
            strategy & top-down decision-making to a laser-focused product
            strategy.
          </p>
          <br />
          <p>
            We took all these ideas from management & our team, crafted 9 MVO
            statements - statements of what we thought was valuable to the
            customer, such as “Save 20% on your flight bookings” - and validated
            those in the market.
          </p>
          <br />
          <p>
            From around 100 survey responses, it became clear that only 3/9 MVO
            statements were things our target customer actually valued.
          </p>
          <br />
          <p>
            This has meant that, rather than committing to 9 different things,
            we are laser-focused on 3 specific areas of value with our product.
          </p>
          <br />
          <h3>Huge Development Savings & Far More Impact</h3>
          <p>
            As a result, we avoided committing hundreds of thousands of euros in
            development costs & likely 1-2 years of effort - something we would
            have done without my learnings from Prod MBA.
          </p>
          <br />
          <p>
            This strategic, customer-centric approach to product has also helped
            us identify a billion dollar idea to focus on (calculated from the
            20m users & €50 per user spend we see another product achieving in a
            very similar, parallel market).
          </p>
          <br />
          <p>
            Again, we would not have identified - and definitely not pursued -
            this opportunity without the learnings from Prod MBA.
          </p>
          <br />
          <p>
            Going from a Feature Factory, top-down approach to a coherent,
            validated product strategy we are already seeing the results from in
            just 2 weeks was really exciting for me as a product leader.
          </p>
          <br />
          <p>We even have product discovery as a core company OKR now!</p>
          <br />
          <br />
          <p>_</p>
          <br />
          <p className="storyPage__about">
            <a
              href="https://www.linkedin.com/in/richard-illig/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Richard
            </a>{' '}
            has worked as a Head of Product or Product Lead for over 6 years,
            currently leading strategy & product at Flightright in Berlin.
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
