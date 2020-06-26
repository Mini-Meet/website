// @flow
import React, { Component } from 'react';

import './Stats.scss';

type Props = {
  header: string,
};

export default class Featured extends Component<Props> {
  render() {
    const { header } = this.props;

    return (
      <div className="stats">
        <p className="stats__header">{header}</p>
        <div className="stats__row">
          <div className="stats__row_col">
            <h3>8.9</h3>
            <p>Student Rating</p>
          </div>
          <div className="stats__row_col">
            <h3>86%</h3>
            <p>Completion Rate</p>
          </div>
          <div className="stats__row_col">
            <h3>26</h3>
            <p>Students</p>
          </div>
        </div>
      </div>
    );
  }
}
