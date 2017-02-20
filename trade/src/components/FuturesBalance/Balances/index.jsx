import React from 'react';

import translate from '@quoine/translate';

import Money from '@quoine/components/Money';
import Info from '@quoine/components/InfoVertical';
import ColorFlashing from '@quoine/components/ColorFlashing';

import styles from './styles.css';

const FuturesBalanceBalances = ({ btc, futures }) => (
  <div className={styles.main}>

    <div className={styles.item}>
      <Info label={translate('futures-balance:balance-btc')}>
        <ColorFlashing value={btc.balance}>
          <Money value={btc.balance} currency={btc.currency} />
        </ColorFlashing>
      </Info>
    </div>

    <div className={styles.item}>
      <Info><span>→</span></Info>
    </div>

    <div className={styles.item}>
      <Info label={translate('futures-balance:balance-futures')}>
        <ColorFlashing value={futures.balance}>
          <Money value={futures.balance} currency={futures.currency} />
        </ColorFlashing>
      </Info>
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
