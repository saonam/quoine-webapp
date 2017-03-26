import React from 'react';

import translate from '@quoine/translate';

import Hint from '@quoine/components/Hint';
import Field from './Field';

import styles from './styles.css';

const NAMES = [
  'bank-name',
  'bank-branch',
  'bank-address',
  'bank-swift',
  'account-name',
  'account-number',
  'account-type',
  'country',
  // ===
  'joint-account-name',
  'joint-address',
  'joint-city',
  'joint-country',
];

const BankDetail = ({ bank }) => (
  <div className={styles.main}>
    {NAMES.map(name => (
      bank[name] ? (
        <Field key={name} id={name}>
          {bank[name]}
        </Field>
      ) : null
    ))}
    {bank.document ? (
      <Field id="document">
        {translate('bank:document-uploaded')}
      </Field>
    ) : null}
    {bank.status ? (
      <Field id="status">
        {translate(`bank:status-${bank.status}`)}
        {bank.status === 'pending' ? (
          <span>
            <span>&nbsp;</span>
            <Hint style={{ width: 160, left: -10 }}>
              {translate('bank:status-pending-help')}
            </Hint>
          </span>
        ) : null}
      </Field>
    ) : null}
  </div>
);

BankDetail.propTypes = {
  bank: React.PropTypes.shape({}).isRequired,
};

export default BankDetail;
