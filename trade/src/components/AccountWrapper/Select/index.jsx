import React from 'react';

import translate from '@quoine/translate';

import AccountSelect from '@quoine/components/AccountSelect';
import Color from '@quoine/components/Color';

import styles from './styles.css';

const AccountWrapperSelect = ({ account, onChange }) => (
  <div className={styles.main}>
    <Color styleName="primary-3">
      {translate('fund:account')}
      <span>: </span>
    </Color>
    <div className={styles.select}>
      <AccountSelect value={account.currency} onChange={onChange} />
    </div>
  </div>
);

AccountWrapperSelect.propTypes = {
  account: React.PropTypes.shape({
    currency: React.PropTypes.string.isRequired,
  }).isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default AccountWrapperSelect;
