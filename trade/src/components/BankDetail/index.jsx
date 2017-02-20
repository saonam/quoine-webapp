import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoVertical';
import Hint from '@quoine/components/Hint';

import Item from './Item';

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
      <Item key={name} bank={bank} name={name} />
    ))}
    {bank.document ? (
      <div className={styles.item}>
        <Info label={translate('bank:document')}>
          {translate('bank:document-uploaded')}
        </Info>
      </div>
    ) : null}
    {bank.status ? (
      <div className={styles.item}>
        <Info label={translate('bank:status')}>
          {translate(`bank:status-${bank.status}`)}
          {bank.status === 'pending' ? (
            <span>
              <span>&nbsp;</span>
              <Hint style={{ width: 160, left: -10 }}>
                {translate('bank:status-pending-help')}
              </Hint>
            </span>
          ) : null}
        </Info>
      </div>
    ) : null}
  </div>
);

BankDetail.propTypes = {
  bank: React.PropTypes.shape({}).isRequired,
};

export default BankDetail;
