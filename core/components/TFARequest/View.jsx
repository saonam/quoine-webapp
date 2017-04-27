import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

import styles from './styles.css';

const TFARequestView = ({ onRequest, sent, busy, error, message, layout }) => (
  <div className={styles[layout || 'main']}>
    <div className={styles.form}>
      <p className={styles.message}>
        {translate(message)}
      </p>
      <div className={styles.button}>
        <Button
          busy={busy} onClick={onRequest} styleName="inline text accent"
        >
          {translate(`tfa:${sent ? 'resend-sms' : 'send'}`)}
        </Button>
      </div>
    </div>
    <p className={styles.error}>
      {translate(error)}
    </p>
  </div>
);

TFARequestView.propTypes = {
  onRequest: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(['vertical']),
  sent: PropTypes.bool.isRequired,
};

export default TFARequestView;
