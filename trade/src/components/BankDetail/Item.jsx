import React from 'react';

import translate from '@quoine/translate';

import Info from '@quoine/components/InfoVertical';

import styles from './styles.css';

const BankDetailItem = ({ bank, name }) => {
  const value = bank[name];
  if (!value) { return null; }
  return (
    <div className={styles.item}>
      <Info label={translate(`bank:${name}`)}>
        {bank[name]}
      </Info>
    </div>
  );
};

BankDetailItem.propTypes = {
  bank: React.PropTypes.shape({}).isRequired,
  name: React.PropTypes.string.isRequired,
};

export default BankDetailItem;
