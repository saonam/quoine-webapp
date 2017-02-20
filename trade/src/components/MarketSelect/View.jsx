import React from 'react';

import Futures from 'components/FuturesActivate';
import Button from './Button';

import styles from './styles.css';

const MarketSelect = ({ futures }) => {
  let futuresNode = null;
  if (process.env.REACT_APP_BITMEX_HOST) {
    futuresNode = futures ? (
      <Button market="futures" />
    ) : (
      <Futures />
    );
  }
  return (
    <div className={styles.main}>
      <Button market="spot" />
      <Button market="margin" />
      {futuresNode}
    </div>
  );
};

MarketSelect.propTypes = {
  futures: React.PropTypes.bool.isRequired,
};

export default MarketSelect;
