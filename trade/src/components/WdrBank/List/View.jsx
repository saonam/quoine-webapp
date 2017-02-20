import React from 'react';

import Item from '../Item';

import styles from './styles.css';

const WdrBankList = ({ banks }) => (
  <div>
    {banks.map(bank => (
      <div className={styles.item} key={bank.id}>
        <Item bank={bank} />
      </div>
    ))}
  </div>
);

WdrBankList.propTypes = {
  banks: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default WdrBankList;
