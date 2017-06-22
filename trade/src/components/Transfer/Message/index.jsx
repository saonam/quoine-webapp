import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const TransferMessage = ({ message }) => (
  <div className={styles.main}>
    <p
      className={styles[message.style]}
    >
      {translate(`fund-withdrawal:message-${message.key}`)}
    </p>

    {message.goto ? (
      <div>
        <p className={styles.help}>
          {translate(`fund-withdrawal:help-${message.key}`)}
        </p>
        <a
          className={styles.link}
          href={`${process.env.REACT_APP_ACCOUNTS_HOST}/settings/${message.goto}`}
        >
          {translate('fund-withdrawal:goto-settings')}
        </a>
      </div>
    ) : null}
  </div>
);

TransferMessage.propTypes = {
  message: PropTypes.shape({
    key: PropTypes.oneOf([
      'pending',
      'declined',
      'banned',
      'documents-submitted',
      // ===
      'limit-accounts',
      'need-tfa',
      'disabled-in-demo-mode',
    ]).isRequired,
    style: PropTypes.oneOf(['positive', 'negative']).isRequired,
    goto: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]).isRequired,
  }).isRequired,
};

export default TransferMessage;
