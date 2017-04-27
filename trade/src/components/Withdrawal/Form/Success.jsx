import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const WdrFormSuccess = ({ success, onSuccessDismiss }) => (
  <div className={styles.main}>
    <p className={styles.help}>
      {success.action} --- {success.id}
    </p>
    <div className={styles.item}>
      <Button
        onClick={onSuccessDismiss}
        styleName="full text large negative-bg"
        autoFocus
      >
        {translate('withdrawal-bank:dismiss')}
      </Button>
    </div>
  </div>
);

WdrFormSuccess.propTypes = {
  success: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({}),
  ]).isRequired,
  onSuccessDismiss: PropTypes.func.isRequired,
};

export default WdrFormSuccess;
