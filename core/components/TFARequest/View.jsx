import React from 'react';

import translate from '@quoine/translate';

import Button from '../ButtonWLoading';

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
  onRequest: React.PropTypes.func.isRequired,
  busy: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  message: React.PropTypes.string.isRequired,
  layout: React.PropTypes.oneOf(['vertical']),
  sent: React.PropTypes.bool.isRequired,
};

export default TFARequestView;
