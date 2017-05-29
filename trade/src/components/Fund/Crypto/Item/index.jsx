import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const FundCryptoItem = ({ label, code, rows, showQRCode }) => {
  let node = null;
  const onRef = (ref) => {
    node = ref;
  };
  const onCopy = () => {
    node.select();
    document.execCommand('copy');
  };
  return (
    <div className={styles.main}>
      {label ? (
        <h2 className={styles.label}>
          {translate(`fund-crypto:${label}`)}
        </h2>
      ) : null}
      {showQRCode ? (
        <div className={styles.qrCode}>
          <QRCode value={code} size={128} />
        </div>
      ) : null}
      <textarea
        className={styles.code}
        readOnly
        value={code}
        ref={onRef}
        rows={rows}
      />
      <div className={styles.button}>
        <Button
          styleName="large full text positive-bg"
          onClick={onCopy}
        >
          {translate(`fund-crypto:${label ? `copy-${label}` : 'copy'}`)}
        </Button>
      </div>
    </div>
  );
};

FundCryptoItem.propTypes = {
  label: PropTypes.oneOf(['address', 'payment-id']),
  code: PropTypes.string.isRequired,
  rows: PropTypes.number,
  showQRCode: PropTypes.bool,
};

export default FundCryptoItem;
