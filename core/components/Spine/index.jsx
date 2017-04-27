import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const Spine = ({ title, children }) => (
  <div className={styles.main}>
    <div className={styles.title}>
      {title}
    </div>
    <div className={styles.body}>
      {children}
    </div>
  </div>
);

Spine.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Spine;
