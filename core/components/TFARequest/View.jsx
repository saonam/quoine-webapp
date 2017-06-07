import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/ButtonWLoading';

import styles from './styles.css';

const getLabel = (sent) => {
  if (!sent) { return 'send'; }
  return (sent === 'authy' ? 'resend-sms' : 'resend');
};

const TFARequestView = ({ onRequest, onResend, sent, busy, error, message, layout }) => (
  <div className={styles[layout || 'main']}>
    <div className={styles.form}>
      <p className={styles.message}>
        {translate(message)}
      </p>
      <div className={styles.button}>
        <Button
          busy={busy} onClick={sent ? onResend : onRequest} styleName="inline text accent"
        >
          {translate(`tfa:${getLabel(sent)}`)}
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
  onResend: PropTypes.func.isRequired,
  busy: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  layout: PropTypes.oneOf(['vertical']),
  sent: PropTypes.oneOf(['', 'authy', 'sms', 'email', 'ga']).isRequired,
};

export default TFARequestView;
