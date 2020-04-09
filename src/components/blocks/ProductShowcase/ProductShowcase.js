// @flow
import React, { Component } from 'react';

import './ProductShowcase.scss';

type Props = {
  header: string,
  blockOneHeader: string,
  blockOneBody: string,
  blockOneImage: string,
  blockTwoHeader: string,
  blockTwoBody: string,
  blockTwoImage: string,
  blockThree: boolean,
  blockThreeHeader: string,
  blockThreeBody: string,
  blockThreeImage: string,
  blockFour: boolean,
  blockFourHeader: string,
  blockFourBody: string,
  blockFourImage: string,
  url: string,
  cta: string,
};

export default class ProductShowcase extends Component<Props> {
  render() {
    const {
      header,
      blockOneHeader,
      blockOneBody,
      blockOneImage,
      blockTwoHeader,
      blockTwoBody,
      blockTwoImage,
      blockThree,
      blockThreeHeader,
      blockThreeBody,
      blockThreeImage,
      blockFour,
      blockFourHeader,
      blockFourBody,
      blockFourImage,
      url,
      cta,
    } = this.props;

    return (
      <div className="product">
        <h2 className="product__header">{header}</h2>

        <div className="block block__reverse">
          <div className="block__text block__text_left">
            <h3>{blockOneHeader}</h3>
            <p>{blockOneBody}</p>
            <a
              className="block__cta"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta}
            </a>
          </div>
          <div className="block__img">
            <img
              alt="Remote Guide"
              src={blockOneImage}
              className="block__img__bg"
            />
          </div>
        </div>

        <div className="block">
          <div className="block__img">
            <img
              alt="Onboarding"
              src={blockTwoImage}
              className="block__img__bg"
            />
          </div>
          <div className="block__text">
            <h3>{blockTwoHeader}</h3>
            <p>{blockTwoBody}</p>
            <a
              className="block__cta"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta}
            </a>
          </div>
        </div>

        {blockThree && (
          <div className="block block__reverse">
            <div className="block__text block__text_left">
              <h3>{blockThreeHeader}</h3>
              <p>{blockThreeBody}</p>
              <a
                className="block__cta"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta}
              </a>
            </div>
            <div className="block__img">
              <img
                alt="Team Retreats"
                src={blockThreeImage}
                className="block__img__bg"
              />
            </div>
          </div>
        )}

        {blockFour && (
          <div className="block">
            <div className="block__img">
              <img
                alt="Onboarding"
                src={blockFourImage}
                className="block__img__bg"
              />
            </div>
            <div className="block__text">
              <h3>{blockFourHeader}</h3>
              <p>{blockFourBody}</p>
              <a
                className="block__cta"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cta}
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}
