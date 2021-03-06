import PropTypes from 'prop-types';
import React from 'react';

import Futures from 'components/FuturesActivate';
import Button from './Button';

import styles from './styles.css';

const MarketSelect = ({ futures, user }) => {
  let futuresNode = null;
  if (process.env.REACT_APP_VENDOR === 'quoine' && user.id && !user.underJFSA) {
    futuresNode = futures ? (
      <Button market="futures" />
    ) : (
      <Futures />
    );
  }
  const marginNode = process.env.REACT_APP_VENDOR !== 'qryptos' ? <Button market="margin" /> : '';
  return (
    <div className={styles.main}>
      <Button market="spot" />
      {marginNode}
      {futuresNode}
    </div>
  );
};

MarketSelect.propTypes = {
  futures: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.number,
    underJFSA: PropTypes.bool,
  }).isRequired,
};

export default MarketSelect;
