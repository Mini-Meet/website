// @flow
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Story.scss';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { Header, Footer, ActiveCampaignForm, Stories } from '../../blocks';

// import thumbnail from '../../../assets/images/thumbnail.jpg';
import tom from '../../../assets/images/stories/tom.jpg';

const ctaHeader = 'Level-up Your Product Career';
const ctaSupportText =
  'Try the free 7-day Mini MBA to learn skills to fast-track your product career:';

const mixpanelEvent = '12. Tom Submit';
const facebookEvent = 'StartTrial'; // Search

const formId = 1;

const title = 'How Tom Increased His Salary by 30% in 6 Weeks';

export default class StoryLuke extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    Mixpanel.track('12. Tom Page');
  }

  render() {
    return (
      <div className="storyPage">
        <Helmet>
          <title>{title}</title>
          <meta property="og:description" content={title} />
          <meta property="og:image" content={tom} />
          <meta property="og:url" content="https://prod.mba/story/tom" />
          <meta name="twitter:image" content={tom} />
          <meta name="twitter:card" content={tom} />
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
          <img alt="Onboarding" src={tom} className="storyPage__body_img" />
          <h3>My Career Felt Stuck.</h3>
          <p>
            I was working in product & “innovation”, but we never actually did
            any innovation. We never even took products to market.
          </p>
          <br />
          <p>
            It felt really frustrating to work on ideas that you knew would
            never deliver any value.
          </p>
          <br />
          <p>
            I felt like the whole process - my whole job - was largely a waste
            of time.
          </p>
          <br />
          <h3>A Safe Space To Level-Up</h3>
          <p>
            I decided to join Prod MBA to learn what building product was{' '}
            <b>really</b> like.
          </p>
          <br />
          <p>
            It promised a safe space to put into practice many of the ideas and
            frameworks I had read about, but had never been able to apply.
          </p>
          <br />
          <h3>The Product Mindset</h3>
          <p>
            The team talk about it a lot - and why it is so important - but the
            mindset shift on the programme is powerful.
          </p>
          <br />
          <p>
            Joining Prod MBA completely changed how I approach product work,
            from vision to strategy to execution.
          </p>
          <br />
          <p>
            I started to become obsessed with customer problems, not just
            solutions, and deeply understanding how product should be approached
            - what the building blocks are to build a successful product.
          </p>
          <br />
          <h3>My Dream Job & A 30% Pay Rise</h3>
          <p>Prod MBA has helped me in many ways, but specifically:</p>
          <br />
          <p>- Helping increase my salary by 30% with my new role</p>
          <br />
          <p>
            - Helping me find my dream role within 6 weeks of deciding it was
            time to find a new role. (There were also over 100 applicants, all
            of whom were much older and more qualified than me on paper - there
            were even a few PhDs I was competing against!)
          </p>
          <br />
          <p>
            - Opening up my career options a lot! I had 17 interview
            invitations, largely as a result of my improved CV and greater
            confidence when interviewing
          </p>
          <br />
          <p>
            - Having greater impact with my work. I am THE one who shifts our
            company’s focus away from solutions and towards customer
            development. The Prod MBA gave me the confidence that this is always
            the right approach. I also now understand how to facilitate
            workshops to align our teams more effectively.
          </p>
          <br />
          <br />
          <p>_</p>
          <br />
          <p className="storyPage__about">
            <a
              href="https://www.linkedin.com/in/tom-schuemchen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tom
            </a>{' '}
            is an experienced innovation manager based in Germany, currently at
            Lohmann GmbH.
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
