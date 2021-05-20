// @flow
import React, { Component } from 'react';

import luke from '../../../assets/images/stories/luke_small.jpg';
import richard from '../../../assets/images/stories/richard_small.jpg';
import antonia from '../../../assets/images/stories/antonia_small.jpg';
import elaine from '../../../assets/images/stories/elaine_small.jpg';
import tom from '../../../assets/images/stories/tom_small.jpg';

import leadership from '../../../assets/images/stories/story-icon/leadership.png';
import growth from '../../../assets/images/stories/story-icon/growth.png';
import impact from '../../../assets/images/stories/story-icon/entrepreneur.png';
import career from '../../../assets/images/stories/story-icon/career.png';
import salary from '../../../assets/images/stories/story-icon/salary.png';

import StoryCard from './StoryCard/StoryCard.jsx';

import './Stories.scss';

type Props = {
  header: string,
};

export default class Stories extends Component<Props> {
  render() {
    const { header } = this.props;
    // NOTE: Testimonial Card Content
    const cards = [
      {
        icon: leadership,
        title: 'Leadership',
        profile: richard,
        name: 'Richard Illig',
        role: 'Product Lead, Flightright',
        quote: '“I aligned my company around a billion dollar idea”',
        url: '/story/richard',
      },
      {
        icon: growth,
        title: 'Career Growth',
        profile: antonia,
        name: 'Antonia Landi',
        role: 'Senior PM/Product Ops',
        quote: '"I have become so much more confident"',
        url: '/story/antonia',
      },
      {
        icon: impact,
        title: 'Impact',
        profile: luke,
        name: 'Luke Demeitrades',
        role: 'Senior PM, gohenry',
        quote: '"I built a profitable product within 6 weeks"',
        url: '/story/luke',
      },
      {
        icon: career,
        title: 'New Role',
        profile: elaine,
        name: 'Elaine Poon',
        role: 'Growth PM',
        quote: '"My journey from Product Owner to Growth PM"',
        url: '/story/elaine',
      },
      {
        icon: salary,
        title: 'Salary',
        profile: tom,
        name: 'Tom S',
        role: 'Innovation Lead',
        quote: '"I increased my salary by 30% in 2 months"',
        url: '/story/tom',
      },
    ];

    return (
      <div className="stories">
        <h2 className="stories__header">{header}</h2>
        <div className="story">
          {cards.map(person => {
            return (
              <StoryCard
                key={person.name}
                icon={person.icon}
                title={person.title}
                profile={person.profile}
                name={person.name}
                role={person.role}
                quote={person.quote}
                url={person.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
