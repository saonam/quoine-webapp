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
  success: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({}),
  ]).isRequired,
  onSuccessDismiss: React.PropTypes.func.isRequired,
};

export default WdrFormSuccess;
