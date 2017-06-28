import PropTypes from 'prop-types';
import React from 'react';

import styles from '../styles.css';

const WdrItemDestinationTag = ({ withdrawal }) => (
  <span className={styles.code}>{withdrawal.destinationTag}</span>
);

WdrItemDestinationTag.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
};

export default WdrItemDestinationTag;
