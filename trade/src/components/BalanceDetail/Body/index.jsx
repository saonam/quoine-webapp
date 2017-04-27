import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import {
  Balance, LoanOffers, Loaned, LoanedInterest,
} from '@quoine/components/Account';

import styles from './styles.css';

const BalanceDetailBody = ({ account }) => (
  <div className={styles.main}>
    <Field label={translate('account:balance')} layout="justify">
      <Balance account={account} />
    </Field>
    <Field label={`└ ${translate('account:loan-offers')}`} layout="justify">
      <LoanOffers account={account} />
    </Field>
    <Field label={translate('account:loaned')} layout="justify">
      <Loaned account={account} />
    </Field>
    <Field label={translate('account:loaned-interest')} layout="justify">
      <LoanedInterest account={account} />
    </Field>
  </div>
);

BalanceDetailBody.propTypes = {
  account: PropTypes.shape({}).isRequired,
};

export default BalanceDetailBody;
