// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { Mixpanel } from '../../../Mixpanel';
import { Button, Loading } from '../../elements';
import { Header } from '../../blocks';

import './Casestudy.scss';

import videoImg from '../../../assets/images/course/henry-video.png';

type FormTypes = {
  onSubscribe: Function,
};

const CustomForm = ({ onSubscribe }: FormTypes) => {
  let email;
  const submit = () => {
    Mixpanel.track(`Course / CS Submit`);

    if (email && email.value && email.value.indexOf('@') > -1) {
      onSubscribe({
        EMAIL: email.value,
      });
    }
  };

  return (
    <div className="casestudymain__cta">
      <input
        ref={node => {
          email = node;
        }}
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <Button primary onClick={submit}>
        Get Your Case Study {'>'}
      </Button>
    </div>
  );
};

export default class Casestudy extends Component<Props> {
  componentDidMount() {
    Mixpanel.track('Course / CS');
  }

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
              {'"'}How I Train Product Managers to Build High-Value Products
              Within 6 weeks{'"'}
            </h3>
          </div>
          <div className="casestudymain">
            <div className="casestudymain__img">
              <img
                alt="Onboarding"
                src={videoImg}
                className="casestudymain__img__bg"
              />
            </div>
            <div className="casestudymain__text">
              <h4>FREE Case Study Reveals:</h4>
              <br />
              <p>
                How <b>most</b> Product Managers sabotage their career
              </p>
              <br />
              <p>
                The <b>TWO</b> things that separate the good from the great
              </p>
              <br />
              <p>
                Our proven process for <b>launching profitable products</b> by
                yourself, in your current role{' '}
              </p>

              <div className="casestudymain__cta">
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
                        <div className="casestudymain__cta__loading">
                          <Loading dark />
                        </div>
                      )}
                      {status === 'error' && (
                        <p
                          className="casestudymain__cta__error"
                          // eslint-disable-next-line
                          dangerouslySetInnerHTML={{ __html: message }}
                        />
                      )}
                      {status === 'success' && (
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
                              Now that you’ve touched the surface with our
                              training above, if you feel ready to STEP UP &
                              accelerate your product career, book a call with
                              us:
                            </p>
                            <Link
                              to="/book-session"
                              className="overlay__content_cta"
                            >
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
    Mixpanel.track('Course / CS / Book');
  };
}
