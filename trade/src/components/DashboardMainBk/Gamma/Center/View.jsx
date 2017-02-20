import React from 'react';

// import Account from 'components/AccountDetail';
// import Form from '../connectors/order-form';
import MrgAcc from 'components/MrgAccDetail';
import Blotters from 'components/Blotters';

import styles from './styles.css';

const DashboardMainGammaCenter = ({ market }) => (
  <div className={styles.main}>
    {market === 'margin' ? (
      <MrgAcc horizontal />
    ) : null}
    <Blotters horizontal />
  </div>
);

DashboardMainGammaCenter.propTypes = {
  market: React.PropTypes.string.isRequired,
};

export default DashboardMainGammaCenter;
