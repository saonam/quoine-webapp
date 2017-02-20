import React from 'react';

import styles from './styles.css';

const ColorBySide = ({ side, children }) => (
  <span className={styles[side]}>
    {children}
  </span>
);

ColorBySide.propTypes = {
  side: React.PropTypes.oneOf([
    'buy', 'sell', 'long', 'short', 'both', 'negative', 'positive', 'light',
    'in', 'out',
  ]).isRequired,
  children: React.PropTypes.node.isRequired,
};

export default ColorBySide;
