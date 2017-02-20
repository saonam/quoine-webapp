import React from 'react';

import t from '@quoine/translate';

import Overview from '@quoine/components/AccountOverview';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const AccountManageVisible = ({ modelKey: currency, onHide, type }) => (
  <div className={styles.main}>
    <Overview currency={currency} />
    {type === 'fiat' ? (
      <Button styleName="accent text inline" onClick={onHide}>
        {t('account-manage:action-hide')}
      </Button>
    ) : null}
  </div>
);

AccountManageVisible.propTypes = {
  modelKey: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['crypto', 'fiat']).isRequired,
  onHide: React.PropTypes.func.isRequired,
};

export default AccountManageVisible;
