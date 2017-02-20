import React from 'react';

import styles from './styles.css';

const getClass = (value) => {
  if (value < 0) { return styles.negative; }
  if (value > 0) { return styles.positive; }
  return '';
};

const ColorByValue = ({ value, children }) => (
  <span className={getClass(value)}>
    {children}
  </span>
);

ColorByValue.propTypes = {
  value: React.PropTypes.number.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default ColorByValue;
