import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const UserForm4JpReviewGroup = ({ heading, children }) => (
  <div className={styles.main}>
    <h1 className={styles.heading}>{heading}</h1>
    <div className={styles.children}>{children}</div>
  </div>
);

UserForm4JpReviewGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserForm4JpReviewGroup;
