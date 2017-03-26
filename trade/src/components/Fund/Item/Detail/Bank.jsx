import React from 'react';

import Field from './Field';

import Id from '../Id';
import Time from '../Time';
import Bank from '../Bank';
import Amount from '../Amount';
import Notes from '../Notes';

import styles from './styles.css';

const FundItemDetailBank = ({ fund }) => (
  <div className={styles.main}>
    <Field id="id"><Id fund={fund} /></Field>
    <Field id="time"><Time fund={fund} type="full" /></Field>
    <Field id="amount"><Amount fund={fund} /></Field>
    <Field id="bank"><Bank fund={fund} /></Field>
    <Field id="notes"><Notes fund={fund} /></Field>
  </div>
);

FundItemDetailBank.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemDetailBank;
