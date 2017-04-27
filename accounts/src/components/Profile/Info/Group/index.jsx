import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const ProfileJpInfoGroup = ({ heading, children }) => (
  <div className={styles.main}>
    <h1 className={styles.heading}>{heading}</h1>
    <div className={styles.children}>{children}</div>
  </div>
);

ProfileJpInfoGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProfileJpInfoGroup;
