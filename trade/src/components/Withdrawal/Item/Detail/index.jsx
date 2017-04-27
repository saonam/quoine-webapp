import PropTypes from 'prop-types';
import React from 'react';

import Field from './Field';

import Id from '../Id';
import Time from '../Time';
import Bank from '../Bank';
import Quantity from '../Quantity';
import Address from '../Address';

import styles from './styles.css';

const WdrItemDetail = ({ withdrawal }) => (
  <div className={styles.main}>
    <Field id="id"><Id withdrawal={withdrawal} /></Field>
    <Field id="time"><Time withdrawal={withdrawal} type="full" /></Field>
    <Field id="quantity"><Quantity withdrawal={withdrawal} /></Field>
    {withdrawal.type === 'fiat' ? (
      <Field id="bank"><Bank withdrawal={withdrawal} /></Field>
    ) : (
      <Field id="address" currency={withdrawal.account}><Address withdrawal={withdrawal} /></Field>
    )}
  </div>
);

WdrItemDetail.propTypes = {
  withdrawal: PropTypes.shape({}).isRequired,
};

export default WdrItemDetail;
