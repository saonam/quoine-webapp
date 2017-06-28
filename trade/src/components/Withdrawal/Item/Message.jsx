import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles.css';

const WdrItemMessage = ({ withdrawal }) => (
  <span className={styles.code}>{withdrawal.message}</span>
);

WdrItemMessage.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
};

export default WdrItemMessage;
