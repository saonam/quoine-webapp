import PropTypes from 'prop-types';
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
  modelKey: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['crypto', 'fiat']).isRequired,
  onHide: PropTypes.func.isRequired,
};

export default AccountManageVisible;
