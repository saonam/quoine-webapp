import React from 'react';

import Field from './Field';

import Time from '../Time';
import Amount from '../Amount';
import Guide from '../Guide';
import Deadline from '../Deadline';

import styles from './styles.css';

const FundItemDetailCash = ({ fund }) => (
  <div className={styles.main}>
    <Field id="time"><Time fund={fund} type="full" /></Field>
    <Field id="amount"><Amount fund={fund} /></Field>
    <Field id="guide"><Guide fund={fund} /></Field>
    <Field id="deadline"><Deadline fund={fund} /></Field>
  </div>
);

FundItemDetailCash.propTypes = {
  fund: React.PropTypes.shape({}).isRequired,
};

export default FundItemDetailCash;
