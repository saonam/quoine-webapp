import React from 'react';

import translate from '@quoine/translate';
import Color from '@quoine/components/Color';
import {
  Product,
  Price,
  Side,
  Leverage,
  TakeProfitWEdit,
  StopLossWEdit,
  Quantity,
  Pnl,
  StatusClose,
  EditConfirmBox,
  ErrBox,
  CloseConfirmBox,
  ClaimConfirmBox,
} from 'components/Position';

import styles from './styles.css';

const Padding = ({ position }) => (
  position.status !== 'open' ? (
    <span className={styles.padding} />
  ) : null
);

const stop = (e) => { e.stopPropagation(); };

const PositionItemOverview = ({ position }) => (
  <div>
    <div className={styles.main}>

      <div className={styles.row}>
        <div className={styles.left}>
          <Product position={position} />
        </div>
        <div className={styles.takeProfitWLabel}>
          <Color styleName="primary-3">
            {translate('position:tp')}
          </Color>
          <span className={styles.takeProfit}>
            <TakeProfitWEdit position={position} layout="vertical" />
          </span>
          <Padding position={position} />
        </div>
        <div className={styles.right}>
          <Quantity position={position} />
        </div>
      </div>


      <div className={styles.row}>
        <div className={styles.left}>
          <Price position={position} type="open" />
        </div>
        <div className={styles.middle}>
          <div className={styles.closePrice}>
            <span>→</span>
            <Price position={position} type="close" />
          </div>
        </div>
        <div className={styles.right}>
          <Pnl position={position} />
        </div>
      </div>


      <div className={styles.row}>
        <div className={styles.left}>
          <Side position={position} />
          <span className={styles.leverage}>
            <Leverage position={position} />
          </span>
        </div>
        <div className={styles.stopLossWLabel}>
          <Color styleName="primary-3">
            {translate('position:sl')}
          </Color>
          <span className={styles.stopLoss}>
            <StopLossWEdit position={position} layout="vertical" />
          </span>
          <Padding position={position} />
        </div>
        <div className={styles.right}>
          <StatusClose position={position} layout="vertical" />
        </div>
      </div>
    </div>
    {/* eslint-disable jsx-a11y/no-static-element-interactions */}
    <div className={styles.box} onClick={stop}>
      <EditConfirmBox position={position} />
      <CloseConfirmBox position={position} />
      <ClaimConfirmBox position={position} />
      <ErrBox position={position} />
    </div>
  </div>
);

Padding.propTypes = PositionItemOverview.propTypes = {
  position: React.PropTypes.shape({
    status: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default PositionItemOverview;
