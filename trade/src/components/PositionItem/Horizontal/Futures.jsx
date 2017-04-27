import PropTypes from 'prop-types';
import React from 'react';

import {
  Updated,
  Product,
  Leverage,
  Quantity,
  Price,
  Margin,
  Value,
  Pnl,
} from 'components/Position';

import styles from './styles.css';

const PositionItemHorizontalFutures = ({ position }) => (
  <div className={styles.main}>
    <div className={styles.item}>
      <Updated position={position} />
    </div>
    <div className={styles.item}>
      <Product position={position} />
    </div>
    <div className={styles.item}>
      <Leverage position={position} />
    </div>
    <div className={styles.itemNum}>
      <Quantity position={position} type="open" />
    </div>
    <div className={styles.itemNum}>
      <Price position={position} type="open" />
    </div>
    <div className={styles.itemNum}>
      <Price position={position} type="mark" />
    </div>
    <div className={styles.itemNum}>
      <Price position={position} type="liquidation" />
    </div>
    <div className={styles.itemNum}>
      <Margin position={position} />
    </div>
    <div className={styles.itemNum}>
      <Value position={position} />
    </div>
    <div className={styles.itemNum}>
      <Pnl position={position} type="open" />
    </div>
    <div className={styles.itemNum}>
      <Pnl position={position} type="close" />
    </div>
  </div>
);

PositionItemHorizontalFutures.propTypes = {
  position: PropTypes.shape({}).isRequired,
};

export default PositionItemHorizontalFutures;
