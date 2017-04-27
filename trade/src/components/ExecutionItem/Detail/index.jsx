import PropTypes from 'prop-types';
import React from 'react';

import {
  Created,
  Id,
  OrderId,
  Target,
} from 'components/Execution';

import Field from './Field';

import styles from './styles.css';

const ExecutionItemDetail = ({ execution }) => (
  <div className={styles.main}>
    <div className={styles.col}>
      <Field id="id"><Id execution={execution} /></Field>
      <Field id="order-id"><OrderId execution={execution} /></Field>
    </div>
    <div className={styles.col}>
      <Field id="target"><Target execution={execution} /></Field>
      <Field id="created-at"><Created execution={execution} /></Field>
    </div>
  </div>
);

ExecutionItemDetail.propTypes = {
  execution: PropTypes.shape({}).isRequired,
};

export default ExecutionItemDetail;
