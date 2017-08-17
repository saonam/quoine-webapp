import React from 'react';
import PropTypes from 'prop-types';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Item from './Item';
import XLMBody from './XLMBody';

import styles from './styles.css';

const getHelpKey = (account) => {
  switch (account) {
    case 'XRP': return 'help-XRP';
    case 'XMR': return 'help-XMR';
    case 'XEM': return 'help-XEM';
    case 'XLM': return 'help-XLM';
    default: return 'help';
  }
};

/* eslint-disable react/prop-types */
const getBody = ({ account, info }) => {
  switch (account) {
    case 'XMR': {
      return (
        <div>
          <div className={styles.item}>
            <Item label="address" code={info.address} rows={4} />
          </div>
          <div className={styles.item}>
            <Item label="payment-id" code={info.paymentId} rows={3} />
          </div>
        </div>
      );
    }
    case 'XEM': {
      return (
        <div className={styles.item}>
          <Item label="message" code={info.message} rows={3} />
        </div>
      );
    }
    case 'XLM': {
      return (
        <XLMBody info={info} />
      );
    }
    default: {
      return (<Item code={info.address} showQRCode />);
    }
  }
};
/* eslint-enable react/prop-types */

const FundCryptoView = ({ busy, info, account }) => {
  if (busy) { return (<Loading />); }

  return (
    <div className={styles.main}>
      <p className={styles.help}>
        {translate(`fund-crypto:${getHelpKey(account)}`)}
      </p>
      <div className={styles.body}>
        {getBody({ account, info })}
      </div>
    </div>
  );
};

FundCryptoView.propTypes = {
  busy: PropTypes.bool.isRequired,
  info: PropTypes.shape({
    address: PropTypes.string,
    paymentId: PropTypes.string,
    message: PropTypes.string,
    memoText: PropTypes.string,
    memoId: PropTypes.string,
    memoHash: PropTypes.string,
  }).isRequired,
  account: PropTypes.string.isRequired,
};

export default FundCryptoView;
