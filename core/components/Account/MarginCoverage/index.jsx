import React from 'react';

import Percentage from '@quoine/components/Percentage';
import ColorFlashing from '@quoine/components/ColorFlashing';

import styles from './styles.css';

const AccountMarginCoverage = ({ account }) => {
  const value = account.marginCoverage;
  if (!isFinite(value)) {
    return (<span className={styles.light}>–</span>);
  }
  const warning = value < 1.5;
  return (
    <span className={warning ? styles.warning : styles.normal}>
      <ColorFlashing value={value}>
        <Percentage value={value} />
      </ColorFlashing>
    </span>
  );
};

AccountMarginCoverage.propTypes = {
  account: React.PropTypes.shape({
    marginCoverage: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountMarginCoverage;
