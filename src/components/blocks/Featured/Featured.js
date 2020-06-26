// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { Button } from '../../elements';

import './Featured.scss';

type Props = {
  header: string,
  mixpanelEvent: string,
};

export default class Featured extends Component<Props> {
  render() {
    const { header, btnText, url } = this.props;

    return (
      <div className="featured">
        <p className="featured__header">{header}</p>
        <div className="featured__logos"></div>
        <div className="featured__button">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <Button onClick={this.goToApplicationPage}>{btnText}</Button>
          </a>
        </div>
      </div>
    );
  }
  goToApplicationPage = () => {
    Mixpanel.track(`${this.props.mixpanelEvent}`);
  };
}
