import React from 'react';
import PropTypes from 'prop-types';

import MemoType from './MemoType';
import Item from '../Item';

import styles from '../styles.css';

/* eslint-disable react/prop-types */
const getCode = ({ type, info }) => {
  switch (type) {
    case 'memo_text': {
      return (
        <Item label="memo-text" code={info.memoText} rows={1} />
      );
    }
    case 'memo_id': {
      return (
        <Item label="memo-id" code={info.memoId} rows={1} />
      );
    }
    case 'memo_hash': {
      return (
        <Item label="memo-hash" code={info.memoHash} rows={3} />
      );
    }
    default: {
      return null;
    }
  }
};
/* eslint-enable react/prop-types */

const FundCryptoXMLBodyView = ({ info, type, setType }) => (
  <div>
    <div className={styles.item}>
      <Item label="address" code={info.address} rows={4} />
    </div>
    <div className={styles.item}>
      <MemoType value={type} onChange={setType} />
    </div>
    <div className={styles.item}>
      {getCode({ type, info })}
    </div>
  </div>
);

FundCryptoXMLBodyView.propTypes = {
  info: PropTypes.shape({
    address: PropTypes.string,
    paymentId: PropTypes.string,
    memoText: PropTypes.string,
    memoId: PropTypes.string,
    memoHash: PropTypes.string,
  }).isRequired,
  type: MemoType.propTypes.value,
  setType: MemoType.propTypes.onChange,
};

export default FundCryptoXMLBodyView;
