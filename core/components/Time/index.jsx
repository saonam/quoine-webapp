import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';
import formats from './formats';

const Time = ({ value, type }) => {
  let result;
  try {
    result = formats[type](value * 1000);
  } catch (e) {
    result = '--';
  }
  return (
    <span className={styles.main}>{result}</span>
  );
};

Time.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.oneOf([
    'full', 'date', 'dateWithYear', 'time', 'fullWithYear',
  ]).isRequired,
};

export default Time;
