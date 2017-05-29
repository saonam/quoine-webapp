import PropTypes from 'prop-types';
import React from 'react';

import Field from 'components/BalanceTotal/Field';

import styles from './styles.css';

import exchange from './exchange';

const BalanceTotalContent = ({ currency, accounts, fxRates }) => {
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
      {process.env.REACT_APP_VENDOR !== 'qryptos' ? (
        <div>
          <Field id="total-fiat" value={totalFiat} currency={currency} />
          <Field id="total-crypto" value={totalCrypto} currency={currency} />
        </div>
      ) : null}
      <Field id="total-balance" value={totalFiat + totalCrypto} currency={currency} />
    </div>
  );
};

BalanceTotalContent.propTypes = {
  currency: PropTypes.string.isRequired,
  accounts: PropTypes.shape({}).isRequired,
  fxRates: PropTypes.shape({}).isRequired,
};

export default BalanceTotalContent;
