// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Mixpanel } from '../../../Mixpanel';
import { Button, Loading } from '../../elements';
import { Header } from '../../blocks';

import './Casestudy.scss';

import video from '../../../assets/images/course/henry-video.png';

type FormTypes = {
  onSubscribe: Function,
};

const CustomForm = ({ onSubscribe }: FormTypes) => {
  let email;
  const submit = () => {
    // Mixpanel.track(`C / ${mixpanelEvent}`);

    if (email && email.value && email.value.indexOf('@') > -1) {
      onSubscribe({
        EMAIL: email.value,
      });
    }
  };

  return (
    <div className="video__cta">
      <input
        ref={node => {
          email = node;
        }}
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <Button primary onClick={submit}>
        Get Your Case Study Now {'>'}
      </Button>
    </div>
  );
};

export default class Casestudy extends Component<Props> {
  render() {
    return (
      <div>
        <Header dark />
        <div className="casestudy">
          <div className="casestudy__header">
            <p className="casestudy__header_caption">
              Case Study For Product Managers:
            </p>
            <h3 className="casestudy__header_h3">
              {'"'}How I Train Product Managers to Focus On The One Thing That
              Matters:{'"'}
            </h3>
          </div>
          <div className="video">
            <div className="video__img">
              <img alt="Onboarding" src={video} className="video__img__bg" />
            </div>
            <div className="video__text">
              <h4>FREE Case Study Reveals:</h4>
              <br />
              <p>Why you need to focus on one thing</p>
              <br />
              <p>The secret weapon to massive product success</p>
              <br />
              <p>The simple 3-step system to getting stakeholder buy-in</p>

              <div className="video__cta">
                <MailchimpSubscribe
                  url="https://productmastery.us5.list-manage.com/subscribe/post?u=9452004c3109652cfc9a9e3e1&amp;id=10e19965fa"
                  render={({ subscribe, status, message }) => (
                    <div>
                      {(!status || status === 'error') && (
                        <CustomForm
                          status={status}
                          message={message}
                          onSubscribe={formData => subscribe(formData)}
                        />
                      )}
                      {status === 'sending' && (
                        <div className="video__cta__loading">
                          <Loading dark />
                        </div>
                      )}
                      {status === 'error' && (
                        <p
                          className="video__cta__error"
                          // eslint-disable-next-line
                          dangerouslySetInnerHTML={{ __html: message }}
                        />
                      )}
                      {status === 'success' && (
                        <div className="overlay">
                          <div className="overlay__content">
                            <p>
                              Now that you’ve absorbed all the cool training
                              above, if you feel you’re ready to STEP UP and
                              move forwards fast with your business then apply
                              now and let’s see how I can help EXPLODE your
                              business by clicking below now…
                            </p>
                            <Link to="/book-session">
                              <Button onClick={this.goToBookSession}>
                                Apply Now To See If You Qualify
                              </Button>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  goToBookSession = () => {
    Mixpanel.track('C / Casestudy / Click Book Session');
  };
}
