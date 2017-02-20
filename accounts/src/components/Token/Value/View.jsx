import React from 'react';

import translate from '@quoine/translate';

import Button from '@quoine/components/Button';

import styles from './styles.css';

const TokenValueView = ({ token, onRef, onCopy }) => (
  <div className={styles.main}>
    <textarea
      className={styles.value} readOnly value={token.value} ref={onRef}
    />
    <Button onClick={onCopy}>{translate('token:value-copy')}</Button>
  </div>
);

TokenValueView.propTypes = {
  onCopy: React.PropTypes.func.isRequired,
  onRef: React.PropTypes.func.isRequired,
  token: React.PropTypes.shape({}).isRequired,
};

export default TokenValueView;
