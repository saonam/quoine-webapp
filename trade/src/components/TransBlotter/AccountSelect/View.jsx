import React from 'react';

import translate from '@quoine/translate';

import AccountSelect from '@quoine/components/AccountSelect';

import styles from './styles.css';

const TransBlotterAccountSelect = ({ account, onChange }) => (
  <div className={styles.main}>
    <div className={styles.label}>
      {translate('trans:account')}
      <span>: </span>
    </div>
    <div className={styles.select}>
      <AccountSelect value={account} onChange={onChange} />
    </div>
  </div>
);

TransBlotterAccountSelect.propTypes = {
  account: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default TransBlotterAccountSelect;
