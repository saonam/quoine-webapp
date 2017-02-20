import React from 'react';

import translate from '@quoine/translate';

import styles from './styles.css';

const PositionItemFuturesColumn = ({ label, children }) => (
  <div className={styles.column}>
    <div className={styles.label}>
      {translate(`position:${label}`)}
    </div>
    <div className={styles.child}>
      {children}
    </div>
  </div>
);

PositionItemFuturesColumn.propTypes = {
  label: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default PositionItemFuturesColumn;
