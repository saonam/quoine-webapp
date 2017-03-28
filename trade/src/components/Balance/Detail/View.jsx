import React from 'react';

import Field from 'components/Balance/Field';

import styles from './styles.css';

import exchange from './exchange';

const BalanceDetail = ({ currency, accounts, fxRates }) => {
  let totalFiat = 0;
  let totalCrypto = 0;

  const { keys, models } = accounts;

  keys.forEach(key => {
    const { balance, type } = models[key];
    const balanceInCurrency = exchange({
      value: balance,
      frm: key,
      to: currency,
      fxRates,
    });

    if (type === 'fiat') {
      totalFiat += balanceInCurrency;
    } else {
      totalCrypto += balanceInCurrency;
    }
  });

  return (
    <div className={styles.main}>
      <Field id="total-fiat" value={totalFiat} currency={currency} />
      <Field id="total-crypto" value={totalCrypto} currency={currency} />
      <Field id="total-balance" value={totalFiat + totalCrypto} currency={currency} />
    </div>
  );
};

BalanceDetail.propTypes = {
  currency: React.PropTypes.string.isRequired,
  accounts: React.PropTypes.shape({}).isRequired,
  fxRates: React.PropTypes.shape({}).isRequired,
};

export default BalanceDetail;
