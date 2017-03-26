import React from 'react';

import Money from '@quoine/components/Money';
import ColorFlashing from '@quoine/components/ColorFlashing';

import Field from './Field';

import styles from './styles.css';

const FuturesBalanceBalances = ({ btc, futures }) => (
  <div className={styles.main}>

    <div className={styles.item}>
      <Field id="balance-btc">
        <ColorFlashing value={btc.balance}>
          <Money value={btc.balance} currency={btc.currency} />
        </ColorFlashing>
      </Field>
    </div>

    <div className={styles.item}>
      <Field><span>→</span></Field>
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
  futures: React.PropTypes.shape({
    balance: React.PropTypes.number.isRequired,
    currency: React.PropTypes.string.isRequired,
  }).isRequired,
  btc: React.PropTypes.shape({
    balance: React.PropTypes.number.isRequired,
    currency: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default FuturesBalanceBalances;
