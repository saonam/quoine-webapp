import React from 'react';

import styles from './styles.css';

const SignUpBody4JpReviewItem = ({ label, children }) => (
  <div className={styles.main}>
    <h1 className={styles.label}>{label || ' '}</h1>
    <h1 className={styles.children}>{children}</h1>
  </div>
);

SignUpBody4JpReviewItem.propTypes = {
  label: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default SignUpBody4JpReviewItem;
