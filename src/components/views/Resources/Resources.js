// @flow
import React, { Component } from 'react';

import { ResourceMenu, ResourceCards } from '../../blocks';

import { Button } from '../../elements';

import './Resources.scss';

import logoPM from '../../../assets/images/resources/logoPM.png';

// Menu Items
const menuItems = [
  {
    id: '1',
    title: 'Vision',
    icon: 'keyboard_arrow_right',
  },
  {
    id: '2',
    title: 'Strategy',
    icon: 'keyboard_arrow_right',
  },
  {
    id: '3',
    title: 'Roadmap',
    icon: 'add',
  },
];

// Resources Card Content
const resourceCards = [
  {
    id: '1',
    title: 'Article Title',
    description:
      'A long description about this article. And here is some more text.',
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '2',
    title: 'Article Title',
    description:
      'A long description about this article. And here is some more text.',
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '3',
    title: 'Article Title',
    description:
      'A long description about this article. And here is some more text.',
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '4',
    title: 'Article Title',
    description:
      'A long description about this article. And here is some more text.',
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '5',
    title: 'Article Title',
    description:
      'A long description about this article. And here is some more text.',
    logo: logoPM,
    logoAlt: 'Article Title',
  },
  {
    id: '6',
    title: 'Article Title',
    description:
      'A long description about this article. And here is some more text.',
    logo: logoPM,
    logoAlt: 'Article Title',
  },
];

export default class Resources extends Component<void> {
  render() {
    return (
      <div className="resources">
        <div className="resources__btn">
          <Button>Join Our Free Course</Button>
        </div>
        <div className="resources__menuwrap">
          <ResourceMenu
            menuItems={menuItems}
            onMenuItemClick={this.handleMenuSelect}
          />
        </div>
        <div className="resources__cardswrap">
          <ResourceCards
            categoryTitle="Category Name"
            resourceCards={resourceCards}
            onCardClick={this.handleCardClick.bind(this)}
          />
        </div>
      </div>
    );
  }

  handleMenuSelect = () => {
    // console.log("click menu item");
  };

  handleCardClick = () => {
    // console.log("card click");
  };
}
