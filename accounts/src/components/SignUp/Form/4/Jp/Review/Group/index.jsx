import React from 'react';

import styles from './styles.css';

const SignUpBody4JpReviewGroup = ({ heading, children }) => (
  <div className={styles.main}>
    <h1 className={styles.heading}>{heading}</h1>
    <div className={styles.children}>{children}</div>
  </div>
);

SignUpBody4JpReviewGroup.propTypes = {
  heading: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default SignUpBody4JpReviewGroup;
