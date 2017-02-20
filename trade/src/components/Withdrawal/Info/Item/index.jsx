import React from 'react';
import translate from '@quoine/translate';

import Money from '@quoine/components/Money';

import styles from './styles.css';

const getTranslation = (label) => {
  let key = '';
  switch (label) {
    case 'minimum': {
      key = 'info-minimum-per-request';
      break;
    }
    case 'maximum': {
      key = 'info-maximum-daily';
      break;
    }
    case 'fee':
    default: {
      key = 'info-fee';
      break;
    }
  }
  return translate(`withdrawal:${key}`);
};

const WdrInfoItem = ({ label, value, account }) => (
  <div className={styles.main}>
    <div className={styles.label}>
      {getTranslation(label)}:&nbsp;
    </div>
    <div className={styles.value}>
      <Money value={value} currency={account} />
    </div>
  </div>
);

WdrInfoItem.propTypes = {
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
  account: React.PropTypes.string.isRequired,
};

export default WdrInfoItem;
