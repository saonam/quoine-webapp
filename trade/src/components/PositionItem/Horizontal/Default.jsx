import PropTypes from 'prop-types';
import React from 'react';

import {
  Claim,
  StatusClose,
  Created,
  EditPadding,
  Fee,
  Id,
  Interest,
  Leverage,
  Margin,
  Pnl,
  PnlWFee,
  Price,
  Product,
  Quantity,
  Side,
  StopLossWEdit,
  TakeProfitWEdit,
} from 'components/Position';

import styles from './styles.css';

const PositionItemHorizontalDefault = ({ position, underJFSA }) => (
  <div className={styles.main}>
    <div className={styles.item}>
      <Created position={position} />
    </div>
    <div className={styles.item}>
      <Product position={position} />
    </div>
    <div className={styles.item}>
      <span>
        <Side position={position} />
      </span>
      <span className={styles.leverage}>
        <Leverage position={position} />
      </span>
    </div>
    <div className={styles.itemNum}>
      <Quantity position={position} type="open" />
    </div>
    <div className={styles.itemNum}>
      <Quantity position={position} type="close" />
    </div>
    <div className={styles.itemNum}>
      <Price position={position} type="open" />
    </div>
    <div className={styles.itemNum}>
      <Price position={position} type="close" />
    </div>
    <div className={styles.itemNumWEdit}>
      <StopLossWEdit position={position} layout="horizontal" />
      <EditPadding position={position} />
    </div>
    <div className={styles.itemNumWEdit}>
      <TakeProfitWEdit position={position} layout="horizontal" />
      <EditPadding position={position} />
    </div>
    <div className={styles.itemNum}>
      <Margin position={position} />
    </div>
    <div className={styles.itemNum}>
      <Interest position={position} type="total" />
    </div>
    <div className={styles.itemNum}>
      <Pnl position={position} type="close" />
    </div>
    <div className={styles.itemNum}>
      <Pnl position={position} type="open" />
    </div>
    <div className={styles.itemNum}>
      <Pnl position={position} />
    </div>
    <div className={styles.itemNum}>
      <Fee position={position} type="total" />
    </div>
    <div className={styles.itemNum}>
      <PnlWFee position={position} type="total" />
    </div>
    <div className={styles.id}>
      <Id position={position} />
    </div>
    {underJFSA ? null : (
      <div className={styles.button}>
        <Claim position={position} layout="horizontal" />
      </div>
    )}
    <div className={styles.buttonWEdit}>
      <StatusClose position={position} layout="horizontal" />
    </div>
  </div>
);

PositionItemHorizontalDefault.propTypes = {
  position: PropTypes.shape({}).isRequired,
  underJFSA: PropTypes.bool.isRequired,
};

export default PositionItemHorizontalDefault;
