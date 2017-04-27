import PropTypes from 'prop-types';
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
  banks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default WdrBankList;
