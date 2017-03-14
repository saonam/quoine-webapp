import React from 'react';
import translate from '@quoine/translate';

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

import styles from './styles.css';

const PositionItemDetail = ({ position, isQuoineJapan }) => (
  <div className={styles.main}>
    <div className={styles.col}>
      <div>
        <span>{translate('position:qty-open')}: </span>
        <Quantity position={position} type="open" />
      </div>
      <div>
        <span>{translate('position:pnl-close')}: </span>
        <Pnl position={position} type="close" />
      </div>
      <div>
        <span>{translate('position:fee')}: </span>
        <Fee position={position} type="total" />
      </div>
      <div>
        <span>{translate('position:int-total')}: </span>
        <Interest position={position} type="total" />
      </div>
      <div>
        <span>{translate('position:created-at')}: </span>
        <Created position={position} />
      </div>
    </div>
    <div className={styles.col}>
      <div>
        <span>{translate('position:qty-close')}: </span>
        <Quantity position={position} type="close" />
      </div>
      <div>
        <span>{translate('position:pnl-open')}: </span>
        <Pnl position={position} type="open" />
      </div>
      <div>
        <span>{translate('position:pnl-w-fee')}: </span>
        <PnlWFee position={position} type="total" />
      </div>
      <div>
        <span>{translate('position:margin')}: </span>
        <Margin position={position} />
      </div>
      <div>
        <span>{translate('position:id')}: </span>
        <Id position={position} />
      </div>
      {isQuoineJapan ? null : (
        <div>
          <Claim position={position} layout="vertical" />
        </div>
      )}
    </div>
  </div>
);

PositionItemDetail.propTypes = {
  position: React.PropTypes.shape({}).isRequired,
  isQuoineJapan: React.PropTypes.bool.isRequired,
};

export default PositionItemDetail;
