import React from 'react';
import QRCode from 'qrcode.react';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Button from '@quoine/components/Button';

import styles from './styles.css';

const FundCryptoView = ({ busy, address, onCopy, onRef }) => (
  busy ? <Loading /> : (
    <div className={styles.main}>
      <p className={styles.help}>
        {translate('fund-crypto:help')}
      </p>
      <div className={styles.code}>
        <QRCode value={address} size={128} />
      </div>
      <textarea
        className={styles.address}
        readOnly
        value={address}
        ref={onRef}
      />
      <div className={styles.button}>
        <Button
          styleName="large full text positive-bg"
          onClick={onCopy}
        >
          {translate('fund-crypto:copy')}
        </Button>
      </div>
    </div>
  )
);

FundCryptoView.propTypes = {
  busy: React.PropTypes.bool.isRequired,
  address: React.PropTypes.string.isRequired,
  onCopy: React.PropTypes.func.isRequired,
  onRef: React.PropTypes.func.isRequired,
};

export default FundCryptoView;
