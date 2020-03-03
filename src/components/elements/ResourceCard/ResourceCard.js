// @flow
import React, { Component } from 'react';
import './ResourceCard.scss';

import { Icon, Card } from '..';

type Props = {
  onClick: Function,
  logo: string,
  logoAlt: string,
  title: string,
  description: string,
};

export default class ResourceCard extends Component<Props> {
  render() {
    const { onClick, logo, logoAlt, title, description } = this.props;

    return (
      <div className="resourceCard">
        <Card onClick={onClick}>
          <div className="resourceCard__bg">
            <div className="resourceCard__bg_container">
              <img alt={logoAlt} src={logo} className="resourceCard__bg_logo" />
            </div>
          </div>
          <h5 className="resourceCard__title">{title}</h5>
          <p className="resourceCard__description">{description}</p>
          <div className="resourceCard__share">
            <Icon
              icon="share" // "arrow_right_alt"
              inactive24="inactive24"
              classOverride="resourceCard__icon"
            />
          </div>
          <div className="resourceCard__open">
            <Icon
              icon="open_in_new" // "arrow_right_alt"
              inactive16="inactive16"
              classOverride="resourceCard__icon"
            />
          </div>
        </Card>
      </div>
    );
  }
}
