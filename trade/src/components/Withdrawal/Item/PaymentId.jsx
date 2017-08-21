import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles.css';

const WdrItemPaymentId = ({ withdrawal }) => (
  <span className={styles.code}>{withdrawal.paymentId}</span>
);

WdrItemPaymentId.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
};

export default WdrItemPaymentId;
