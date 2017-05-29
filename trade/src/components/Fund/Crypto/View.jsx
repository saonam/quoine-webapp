import React from 'react';
import PropTypes from 'prop-types';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Item from './Item';

import styles from './styles.css';

const getHelpKey = (account) => {
  switch (account) {
    case 'XMR': return 'help-XMR';
    case 'XRP': return 'help-XRP';
    default: return 'help';
  }
};

const FundCryptoView = ({ busy, address, paymentId, account }) => {
  if (busy) { return (<Loading />); }

  return (
    <div className={styles.main}>
      <p className={styles.help}>
        {translate(`fund-crypto:${getHelpKey(account)}`)}
      </p>
      <div className={styles.body}>
        {account === 'XMR' ? (
          <div>
            <div className={styles.item}>
              <Item label="address" code={address} rows={4} />
            </div>
            <div className={styles.item}>
              <Item label="payment-id" code={paymentId} rows={3} />
            </div>
          </div>
        ) : (
          <Item code={address} showQRCode />
        )}
      </div>
    </div>
  );
};

FundCryptoView.propTypes = {
  busy: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
  paymentId: PropTypes.string.isRequired,
  account: PropTypes.string.isRequired,
};

export default FundCryptoView;
