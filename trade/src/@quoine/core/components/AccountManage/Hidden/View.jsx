import React from 'react';

import t from '@quoine/translate';

import Overview from '@quoine/components/AccountOverview';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const AccountManageVisible = ({ modelKey: currency, onShow }) => (
  <div className={styles.main}>
    <Overview currency={currency} />
    <Button styleName="accent text inline" onClick={onShow}>
      {t('account-manage:action-show')}
    </Button>
  </div>
);

AccountManageVisible.propTypes = {
  modelKey: React.PropTypes.string.isRequired,
  onShow: React.PropTypes.func.isRequired,
};

export default AccountManageVisible;
