import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import Guide from 'components/Fund/Item/Guide';

import styles from './styles.css';

const FundCashSuccess = ({ success, onSuccessDismiss }) => (
  <div className={styles.main}>
    <p className={styles.help}>
      {translate('fund-cash:success-1')}
    </p>
    <p className={styles.help}>
      <Guide fund={success} />
    </p>
    <p className={styles.helpLight}>
      {translate('fund-cash:success-2')}
    </p>
    <div className={styles.item}>
      <Button
        onClick={onSuccessDismiss}
        styleName="full text large accent-bg"
        autoFocus
      >
        {translate('fund-cash:dismiss')}
      </Button>
    </div>
  </div>
);

FundCashSuccess.propTypes = {
  success: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
  onSuccessDismiss: PropTypes.func.isRequired,
};

export default FundCashSuccess;
