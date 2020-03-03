// @flow
import React, { Component } from 'react';
import { Mixpanel } from '../../../Mixpanel';
import { ResourceCard } from '../../elements';

import './ResourceCards.scss';

type ResourceCardProps = Object; // TODO - define real props inside Object e.g. { title: string... }

type Props = {
  key: string,
  categoryTitle: string,
  onCardClick: Function,
  resourceCards: Array<ResourceCardProps>, // TODO - define real props inside Object e.g. { title: string... }
};

export default class ResourceCards extends Component<Props> {
  render() {
    const { key, categoryTitle, resourceCards } = this.props;

    return (
      <div className="resourceCards">
        <h4>{categoryTitle}</h4>
        <div className="resourceCards__cards">
          {resourceCards.map(resourceCard => {
            return (
              <ResourceCard
                key={key}
                onClick={this.onClick.bind(this, resourceCard)}
                logo={resourceCard.logo}
                logoAlt={resourceCard.logoAlt}
                title={resourceCard.title}
                description={resourceCard.description}
              />
            );
          })}
        </div>
      </div>
    );
  }

  onClick = (resourceCard: resourceCardProps) => {
    Mixpanel.track(`Onboarding: ${resourceCard.title}`);

    this.props.onCardClick();
  };
}
