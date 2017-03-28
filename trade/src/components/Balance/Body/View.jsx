import React from 'react';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Select from 'components/Balance/Select';
import Detail from 'components/Balance/Detail';

import styles from './styles.css';

const BalanceBodyView = ({ currency, onChange }) => (
  currency ? (
    <div className={styles.main}>
      <div className={styles.input}>
        <Select value={currency} onChange={onChange} />
      </div>
      <div className={styles.body}>
        <Detail currency={currency} />
      </div>
    </div>
  ) : (
    <LoadingIconWrapper />
  )
);

BalanceBodyView.propTypes = {
  currency: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default BalanceBodyView;
