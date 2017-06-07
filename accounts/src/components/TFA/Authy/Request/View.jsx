import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';
import ErrorMessage from '@quoine/components/ErrorMessage';

import styles from './styles.css';

const TFAAuthyRequestView = ({ busy, error, message, onResend }) => (
  <div className={styles.main}>
    <div className={styles.form}>
      <p className={styles.message}>
        {translate(message)}
      </p>
      <div className={styles.button}>
        <Button
          busy={busy} onClick={onResend} styleName="inline text accent"
        >
          {translate('tfa:resend-sms')}
        </Button>
      </div>
    </div>
    <ErrorMessage error={error} />
  </div>
);

TFAAuthyRequestView.propTypes = {
  busy: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onResend: PropTypes.func.isRequired,
  ...ErrorMessage.propTypes,
};

export default TFAAuthyRequestView;
