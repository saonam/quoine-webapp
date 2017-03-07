import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const TransferMessage = ({ status }) => (
  <div className={styles.main}>
    <p
      className={styles[`status-${
        status === 'documents-submitted' ? 'positive' : 'negative'
      }`]}
    >
      {translate(`fund-withdrawal:status-${status}`)}
    </p>

    {status !== 'documents-submitted' && status !== 'not-allow-in-traders' ? (
      <div>
        <p className={styles.help}>
          {translate(`fund-withdrawal:help-${status}`)}
        </p>
        <a
          className={styles.link}
          href={`${process.env.REACT_APP_ACCOUNTS_HOST}/settings/profile`}
        >
          {translate('fund-withdrawal:action')}
        </a>
      </div>
    ) : null}
  </div>
);

TransferMessage.propTypes = {
  status: React.PropTypes.oneOf([
    'pending', 'declined', 'documents-submitted', 'not-allow-in-traders',
  ]).isRequired,
};

export default TransferMessage;
