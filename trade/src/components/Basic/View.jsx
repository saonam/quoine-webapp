import PropTypes from 'prop-types';
import React from 'react';

import Account from 'components/AccountDetail';
import OrderEntry from 'components/OrderEntry';
import MrgAcc from 'components/MrgAccDetail';

import styles from './styles.css';

const Basic = ({ market }) => (
  <div className={styles.main}>
    <div className={styles.panel}>
      <Account />
    </div>
    <div className={styles.panel}>
      <OrderEntry />
    </div>
    {market === 'margin' ? (
      <div className={styles.panel}>
        <MrgAcc />
      </div>
    ) : null}
  </div>
);

Basic.propTypes = {
  market: PropTypes.string.isRequired,
};

export default Basic;
