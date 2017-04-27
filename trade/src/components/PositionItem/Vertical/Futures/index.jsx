import PropTypes from 'prop-types';
import React from 'react';

import {
  Product,
  Price,
  Leverage,
  Quantity,
  Pnl,
  Margin,
  Value,
} from 'components/Position';
import Column from './Column';

import styles from './styles.css';

const PositionItemFuturesVertical = ({ position }) => (
  position.margin ? (
    <div className={styles.main}>
      <div className={styles.row}>
        <Column label="product">
          <Product position={position} />
        </Column>
        <Column label="leverage">
          <Leverage position={position} />
        </Column>
        <Column label="quantity">
          <Quantity type="open" position={position} />
        </Column>
      </div>
      <div className={styles.row}>
        <Column label="price-open">
          <Price type="open" position={position} />
        </Column>
        <Column label="price-mark">
          <Price type="mark" position={position} />
        </Column>
        <Column label="price-liq">
          <Price type="liquidation" position={position} />
        </Column>
      </div>
      <div className={styles.row}>
        <Column label="value">
          <Value position={position} />
        </Column>
        <Column label="pnl-realised">
          <Pnl type="open" position={position} />
        </Column>
        <Column label="pnl-unrealised">
          <Pnl type="close" position={position} />
        </Column>
      </div>
      <div className={styles.row}>
        <Column label="margin">
          <Margin position={position} />
        </Column>
      </div>
    </div>
  ) : null
);

PositionItemFuturesVertical.propTypes = {
  position: PropTypes.shape({}).isRequired,
};

export default PositionItemFuturesVertical;
