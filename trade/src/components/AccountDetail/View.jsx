import React from 'react';

import Spot from './Spot';
import Margin from './Margin';
import Futures from './Futures';

import styles from './styles.css';

const getElement = (market) => {
  switch (market) {
    case 'spot': return <Spot />;
    case 'margin': return <Margin />;
    case 'futures': return <Futures />;
    default: return null;
  }
};

const AccountDetail = ({ market }) => (
  <div className={styles.main}>
    {getElement(market)}
  </div>
);

AccountDetail.propTypes = {
  market: React.PropTypes.string.isRequired,
};

export default AccountDetail;
