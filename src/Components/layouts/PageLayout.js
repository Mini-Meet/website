// @flow
import React, { Component } from 'react';
import styles from './PageLayout.scss';
import type { Node } from 'react';

type Props = {
  children: Node,
};

export default class PageLayout extends Component<Props> {
  render() {
    const { children } = this.props;

    return <div className={styles.page}>{children}</div>;
  }
}
