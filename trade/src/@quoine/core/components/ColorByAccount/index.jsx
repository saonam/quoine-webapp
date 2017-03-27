import React from 'react';

import styles from './styles.css';

const ColorByAccount = ({ account, children }) => (
  <span className={styles[account]}>
    {children}
  </span>
);

ColorByAccount.propTypes = {
  account: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default ColorByAccount;
