import React from 'react';

import ProductSelect from 'components/ProductSelect';
import MrgAccManage from 'components/MrgAccManage';

import styles from './styles.css';

const DashboardHeader = ({ market }) => (
  <div className={styles.main}>
    <div className={styles.trading}>
      <ProductSelect />
    </div>
    {market === 'margin' ? (
      <div className={styles.manage}>
        <MrgAccManage />
      </div>
    ) : null}
  </div>
);

DashboardHeader.propTypes = {
  market: React.PropTypes.string.isRequired,
};

export default DashboardHeader;
