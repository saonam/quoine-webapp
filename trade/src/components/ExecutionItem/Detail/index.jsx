import React from 'react';
import translate from '@quoine/translate';

import {
  Created,
  Id,
  OrderId,
  Target,
} from 'components/Execution';
import styles from './styles.css';

const ExecutionItemDetail = ({ execution }) => (
  <div className={styles.main}>
    <div className={styles.col}>
      <div>
        <span>{translate('execution:id')}: </span>
        <Id execution={execution} />
      </div>
      <div>
        <span>{translate('execution:order-id')}: </span>
        <OrderId execution={execution} />
      </div>
    </div>
    <div className={styles.col}>
      <div>
        <span>{translate('execution:target')}: </span>
        <Target execution={execution} />
      </div>
      <div>
        <span>{translate('execution:created-at')}: </span>
        <Created execution={execution} />
      </div>
    </div>
  </div>
);

ExecutionItemDetail.propTypes = {
  execution: React.PropTypes.shape({}).isRequired,
};

export default ExecutionItemDetail;
