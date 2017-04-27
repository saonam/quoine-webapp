import PropTypes from 'prop-types';
import React from 'react';

import borderStyles from '@quoine/styles/border.css';

import styles from './styles.css';

const FloatBox = ({ children, color }) => (
  <div
    className={`${styles.main} ${
      borderStyles[`color-${color || 'accent'}`]
    }`}
  >
    <div className={styles.children}>
      {children}
    </div>
  </div>
);

FloatBox.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

export default FloatBox;
