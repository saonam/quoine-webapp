import React from 'react';

import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

import Select from 'components/BalanceTotal/Select';
import Content from 'components/BalanceTotal/Content';

import styles from './styles.css';

const BalanceTotalBodyView = ({ currency, onChange }) => (
  currency ? (
    <div className={styles.main}>
      <div className={styles.input}>
        <Select value={currency} onChange={onChange} />
      </div>
      <div className={styles.body}>
        <Content currency={currency} />
      </div>
    </div>
  ) : (
    <LoadingIconWrapper />
  )
);

BalanceTotalBodyView.propTypes = {
  currency: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default BalanceTotalBodyView;
