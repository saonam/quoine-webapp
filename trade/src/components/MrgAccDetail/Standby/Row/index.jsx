import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const MrgAccDetailRow = ({ left, label, right }) => (
  <div className={styles.main}>
    <div className={styles.left}>{left}</div>
    <div className={styles.label}>{label}</div>
    <div className={styles.right}>{right}</div>
  </div>
);

MrgAccDetailRow.propTypes = {
  left: PropTypes.node.isRequired,
  label: PropTypes.node,
  right: PropTypes.node.isRequired,
};

export default MrgAccDetailRow;
