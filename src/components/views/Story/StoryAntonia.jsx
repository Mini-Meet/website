// @flow
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import './Story.scss';
import { FacebookPixel } from '../../../FacebookPixel';
import { Mixpanel } from '../../../Mixpanel';
import { Header, Footer, ActiveCampaignForm, Stories } from '../../blocks';

// import thumbnail from '../../../assets/images/thumbnail.jpg';
import antonia from '../../../assets/images/stories/antonia.jpg';

const ctaHeader = 'Level-up Your Product Career';
const ctaSupportText =
  'Try the free 7-day Mini MBA to learn skills to fast-track your product career:';

const mixpanelEvent = '12. Antonia Submit';
const facebookEvent = 'StartTrial'; // Search

const formId = 1;

const title = 'How Antonia Became A More Confident Product Leader';

export default class StoryAntonia extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    Mixpanel.track('12. Antonia Page');
  }

  render() {
    return (
      <div className="storyPage">
        <Helmet>
          <title>{title}</title>
          <meta property="og:description" content={title} />
          <meta property="og:image" content={antonia} />
          <meta property="og:url" content="https://prod.mba/story/antonia" />
          <meta name="twitter:image" content={antonia} />
          <meta name="twitter:card" content={antonia} />
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
          <img alt="Onboarding" src={antonia} className="storyPage__body_img" />
          <h3>We Were Doing Product Wrong</h3>
          <p>
            Even though I was active in the Berlin startup scene, and already in
            a product role by the time the Prod MBA rolled around, I never
            really felt like I was really ‘doing’ Product Management.
          </p>
          <br />
          <p>
            Also, up until that point I had never been at a company that did
            product ‘the right way’.
          </p>
          <br />
          <p>
            I really wanted to focus on becoming more customer centric and
            solving real user problems, but I had lost hope that I would ever be
            able - or even allowed - to do that at my job, where I was simply
            executing whatever was given to me.
          </p>
          <br />
          <h3>I Needed Change</h3>
          <p>
            I’m quite an outspoken person, so I kept trying to push and push for
            more autonomy in my job.
          </p>
          <br />
          <p>
            I also kept asking to be given problems to solve instead of fully
            formed feature ideas.
          </p>
          <br />
          <p>
            I was reading lots of product books and blogs, and was looking at
            product management programmes as well, but everything was purely
            theoretical - I couldn’t find somewhere to practice this.
          </p>
          <br />
          <h3>Open, Honest Conversations</h3>
          <p>
            Something that struck me very early on is that the Prod MBA is very
            honest and open about the shortcomings of popular frameworks.
          </p>
          <br />
          <p>
            My confidence in the Prod MBA only increased when I got to hear more
            of Henry’s thoughts on what ‘good’ product management is, and why
            understanding - and validating! - the problem space first and
            foremost is the most important thing.
          </p>
          <br />
          <p>
            Finally, the team wasn’t shy about telling us that it was gonna be
            an intense six weeks, which was exactly the challenge I was looking
            for.
          </p>
          <br />
          <p>
            Needless to say that the focus on being very hands-on made it stand
            out from all other programmes I had looked at.
          </p>
          <br />
          <h3>Out of My Comfort Zone!</h3>
          <p>
            Simply put: During the Prod MBA I was doing things I had never done
            before!
          </p>
          <br />
          <p>
            I was putting myself out there, speaking to complete strangers about
            my problem space, and continuously harnessing new insights.
          </p>
          <br />
          <p>
            Instead of only reading about what I should be doing, I was right
            there doing it.
          </p>
          <br />
          <p>
            The Prod MBA gave me a blueprint for how to be an effective PM, and
            every time I use it, I get more confident in my abilities.
          </p>
          <br />
          <h3>A Blueprint For My Career</h3>
          <p>
            I think the programme really made me realise what I’m looking for in
            my dream role, and it gave me the tools to get there, too.
          </p>
          <br />
          <p>
            I’m in a role now where I do a lot more problem validation and
            discovery work, and I would absolutely be floundering if it wasn’t
            for the Prod MBA.
          </p>
          <br />
          <p>
            Knowing that I can rely on the skills I learned during this
            programme makes me confident that given enough time to explore, I
            can solve any customer problem.
          </p>
          <br />
          <br />
          <p>_</p>
          <br />
          <p className="storyPage__about">
            <a
              href="https://www.linkedin.com/in/landiantonia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Antonia
            </a>{' '}
            has worked in product for 5 years & is now founder at Project Eva,
            Senior PM in Prod Ops at AVIV & leader of the Prod MBA Women{"'"}s
            Circle
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
    Mixpanel.track('12. Antonia Book Call');
    console.log('12. Antonia Book Call');
  };
}
