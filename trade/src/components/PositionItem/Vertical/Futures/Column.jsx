import PropTypes from 'prop-types';
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
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default PositionItemFuturesColumn;
