import React from 'react';

import styles from './styles.css';

const Spine = ({ title, children }) => (
  <span className={styles.main}>
    <span className={styles.title}>
      {title}
    </span>
    <span className={styles.body}>
      {children}
    </span>
  </span>
);

Spine.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.node,
};

export default Spine;
