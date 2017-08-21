import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles.css';

const WdrItemAddress = ({ withdrawal }) => (
  <span className={styles.code}>{withdrawal.address}</span>
);

WdrItemAddress.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
};

export default WdrItemAddress;
