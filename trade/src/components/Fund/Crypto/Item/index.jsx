import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';
import Field from 'components/Transfer/Field';

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
      <Field label={label ? translate(`fund-crypto:${label}`) : ''}>
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
      </Field>

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
  label: PropTypes.string,
  code: PropTypes.string.isRequired,
  rows: PropTypes.number,
  showQRCode: PropTypes.bool,
};

export default FundCryptoItem;
