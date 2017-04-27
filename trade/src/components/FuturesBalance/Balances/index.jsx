import PropTypes from 'prop-types';
import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

import Field from './Field';

import styles from './styles.css';

const FuturesBalanceBalances = ({ btc, futures, type }) => (
  <div className={styles.main}>

    <div className={styles.item}>
      <Field id="balance-btc">
        <ColorFlashing value={btc.balance}>
          <Money value={btc.balance} currency={btc.currency} />
        </ColorFlashing>
      </Field>
    </div>

    <div className={styles.item}>
      <Field>
        {type === 'fund' ? '→' : '←'}
      </Field>
    </div>

    <div className={styles.item}>
      <Field id="balance-futures">
        <ColorFlashing value={futures.balance}>
          <Money value={futures.balance} currency={futures.currency} />
        </ColorFlashing>
      </Field>
    </div>
  </div>
);

FuturesBalanceBalances.propTypes = {
  futures: PropTypes.shape({
    balance: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
  btc: PropTypes.shape({
    balance: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['fund', 'withdrawal']),
};

export default FuturesBalanceBalances;
