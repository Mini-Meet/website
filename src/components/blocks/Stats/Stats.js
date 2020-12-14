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
            <h3>9.1</h3>
            <p>Average Student Rating</p>
          </div>
          <div className="stats__row_col">
            <h3>93%</h3>
            <p>Completion Rate*</p>
            <p className="stats__row_col_small">(Industry average is 10-30%)</p>
          </div>
          <div className="stats__row_col">
            <h3>60</h3>
            <p>Students</p>
          </div>
        </div>
      </div>
    );
  }
}
