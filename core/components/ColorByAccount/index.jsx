import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.css';

const ColorByAccount = ({ account, children }) => (
  <span className={styles[account]}>
    {children}
  </span>
);

ColorByAccount.propTypes = {
  account: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ColorByAccount;
