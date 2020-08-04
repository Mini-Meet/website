// @flow
import React, { Component } from 'react';
import { ButtonNextPage } from '../../elements';
import { MailchimpForm } from '..';

import './Featured.scss';

type Props = {
  header: string,
  btnText: string,
  nextPageUrl: string,
  onClick: Function,
  buttonNext: boolean,
  //
  mailchimpForm: boolean,
  subText: string,
  subTextUrl: string,
  subTextUrlText: string,
};

export default class Featured extends Component<Props> {
  render() {
    const {
      header,
      btnText,
      nextPageUrl,
      onClick,
      buttonNext,
      //
      mailchimpForm,
      subText,
      subTextUrl,
      subTextUrlText,
    } = this.props;

    return (
      <div className="featured">
        <p className="featured__header">{header}</p>
        <div className="featured__logos"></div>
        <h4 className="featured__cta">Learn how to join these alumni:</h4>
        <div className="featured__button">
          {buttonNext && (
            <ButtonNextPage
              nextPageUrl={nextPageUrl}
              onClick={onClick}
              btnText={btnText}
            />
          )}
          {mailchimpForm && (
            <MailchimpForm
              subText={subText}
              subTextUrl={subTextUrl}
              subTextUrlText={subTextUrlText}
            />
          )}
        </div>
      </div>
    );
  }
}
