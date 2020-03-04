// @flow
import React, { Component } from 'react';
import { Button } from '../../elements';

import './Banner.scss';

type Props = {
  header: string,
  blockHeader: string,
  blockBody: string,
  blockImage: string,
  onClick: Function,
  btnText: string,
  url: string,
};

export default class Banner extends Component<Props> {
  render() {
    const {
      header,
      blockHeader,
      blockBody,
      blockImage,
      onClick,
      btnText,
      url,
    } = this.props;

    return (
      <div className="banner">
        <h2 className="banner__header">{header}</h2>

        <div className="info block__reverse">
          <div className="info__text info__text_left">
            <h3>{blockHeader}</h3>
            <p>{blockBody}</p>
            <div className="info__cta">
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button onClick={onClick}>{btnText}</Button>
              </a>
            </div>
          </div>
          <div className="info__img">
            <a className="info__img_link" href={url}>
              <img
                alt="Remote Guide"
                src={blockImage}
                className="block__img__bg"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
