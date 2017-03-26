import React from 'react';

import Header from './Header';
import Message from './Message';

import styles from './styles.css';

// const disableOverlay = (event) => (
//   // eslint-disable-next-line no-param-reassign
//   event.target.style.pointerEvents = 'none'
// );

const Charts = ({ error, double }) => {
  if (error) { return <Message />; }
  const className = `${styles.main} ${styles[double ? 'double' : 'single']}`;
  return (
    <div className={className}>
      <header className={styles.header}>
        <Header double={double} />
      </header>
      <div className={styles.primary}>
        <div className={styles.node} id="primary-chart" />
      </div>
      {double ? (
        <div className={styles.secondary}>
          <div className={styles.node} id="secondary-chart" />
        </div>
      ) : null}
    </div>
  );
};

Charts.propTypes = {
  error: React.PropTypes.bool.isRequired,
  double: React.PropTypes.bool.isRequired,
};

export default Charts;
