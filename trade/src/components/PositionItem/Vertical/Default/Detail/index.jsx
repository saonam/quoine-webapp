import React from 'react';

import {
  Claim,
  Created,
  Fee,
  Id,
  Interest,
  Margin,
  Pnl,
  PnlWFee,
  Quantity,
} from 'components/Position';

import Field from './Field';

import styles from './styles.css';

const PositionItemDetail = ({ position, isQuoineJapan }) => (
  <div className={styles.main}>
    <div className={styles.col}>
      <Field id="qty-open"><Quantity position={position} type="open" /></Field>
      <Field id="pnl-close"><Pnl position={position} type="close" /></Field>
      <Field id="fee"><Fee position={position} type="total" /></Field>
      <Field id="int-total"><Interest position={position} type="total" /></Field>
      <Field id="created-at"><Created position={position} /></Field>
    </div>
    <div className={styles.col}>
      <Field id="qty-close"><Quantity position={position} type="close" /></Field>
      <Field id="pnl-open"><Pnl position={position} type="open" /></Field>
      <Field id="pnl-w-fee"><PnlWFee position={position} type="total" /></Field>
      <Field id="margin"><Margin position={position} /></Field>
      <Field id="id"><Id position={position} /></Field>
      {isQuoineJapan ? null : (
        <Claim position={position} layout="vertical" />
      )}
    </div>
  </div>
);

PositionItemDetail.propTypes = {
  position: React.PropTypes.shape({}).isRequired,
  isQuoineJapan: React.PropTypes.bool.isRequired,
};

export default PositionItemDetail;
