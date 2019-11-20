import React from 'react';

import styles from './PageLayout.scss';

export default class PageLayout extends React.Component {
  render() {
    const { children } = this.props;

    return <div className={styles.page}>{children}</div>;
  }
}
