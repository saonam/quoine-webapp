import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Loading from '@quoine/components/LoadingIconWrapper';
import Toggle from 'components/TFA/Toggle';

import styles from './styles.css';

const TFAGAEnableView = ({ busy, gaKey, qrCode, onToggleTfa }) => (
  <div className={styles.main}>
    <h2 className={styles.title}>
      1. {translate('tfa-ga:scan-barcode')}
    </h2>
    {busy ? (
      <Loading />
    ) : (
      <img className={styles.image} alt="QR code" src={qrCode} />
    )}
    <h2 className={styles.title}>
      2. {translate('tfa-ga:enter-code')}
    </h2>
    <p className={styles.description}>
      {translate('tfa-ga:enter-code-description')}
    </p>
    <div className={styles.form}>
      <Toggle
        app="ga" action="enable"
        onToggleTfa={onToggleTfa}
      />
    </div>
    <h2 className={styles.keyLabel}>
      {translate('tfa-ga:enter-key-description')}
    </h2>
    <textarea rows={1} className={styles.keyValue} value={gaKey} />
  </div>
);

TFAGAEnableView.propTypes = {
  busy: PropTypes.bool.isRequired,
  gaKey: PropTypes.string.isRequired,
  qrCode: PropTypes.string.isRequired,
  onToggleTfa: PropTypes.func.isRequired,
};

export default TFAGAEnableView;
