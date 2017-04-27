import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const FundFiatBankSuccess = ({ success, onSuccessDismiss }) => (
  <div className={styles.main}>
    <p className={styles.title}>
      <span>{translate('fund-bank:help-1')}</span>
      <Button styleName="inline text primary-3" disabled>
        {translate('fund-bank:open')}
      </Button>
    </p>

    <p className={styles.help}>
      {translate('fund-bank:success', { id: success.id })}
    </p>
    <div className={styles.item}>
      <Button
        onClick={onSuccessDismiss}
        styleName="full text large accent-bg"
        autoFocus
      >
        {translate('fund-bank:dismiss')}
      </Button>
    </div>
  </div>
);

FundFiatBankSuccess.propTypes = {
  success: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
  onSuccessDismiss: PropTypes.func.isRequired,
};

export default FundFiatBankSuccess;
