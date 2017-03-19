import React from 'react';

import styles from './styles.css';
import formats from './formats';

const Time = ({ value, type }) => (
  <span className={styles.main}>
    {value ? formats[type](value * 1000) : '--'}
  </span>
);

Time.propTypes = {
  value: React.PropTypes.number.isRequired,
  type: React.PropTypes.oneOf([
    'full', 'date', 'dateWithYear', 'time', 'fullWithYear',
  ]).isRequired,
};

export default Time;
