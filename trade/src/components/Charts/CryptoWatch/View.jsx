import PropTypes from 'prop-types';
import React from 'react';

import Message from '../Message';

import styles from './styles.css';

const ChartsCryptoWatchView = ({ id, error }) => {
  if (error) { return <Message />; }
  return (
    <div className={styles.main} id={id} />
  );
};

ChartsCryptoWatchView.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
};

export default ChartsCryptoWatchView;
