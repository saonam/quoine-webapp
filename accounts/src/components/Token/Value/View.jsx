import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const TokenValueView = ({ token, onRef, onCopy }) => (
  <div>
    <div className={styles.main}>
      <textarea className={styles.value} readOnly value={token.value} ref={onRef} />
      <Button onClick={onCopy}>{translate('token:value-copy')}</Button>
    </div>

    <p className={styles.message}>
      {translate('token:value-message')}
    </p>
  </div>
);

TokenValueView.propTypes = {
  onCopy: PropTypes.func.isRequired,
  onRef: PropTypes.func.isRequired,
  token: PropTypes.shape({}).isRequired,
};

export default TokenValueView;
