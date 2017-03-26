import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';
import Money from '@quoine/components/Money';
import Info from '@quoine/components/Field';
import Color from '@quoine/components/Color';

import styles from './styles.css';

const PositionEditConfirmBoxView = ({ onSet, confirming, position }) => {
  if (!confirming || confirming.id !== position.id) { return null; }
  const { target, value } = confirming;
  const currency = position.quoteCurrency;
  const label = translate(`position:${
    target === 'stopLoss' ? 'stop-loss' : 'take-profit'
  }`);
  return (
    <div className={styles.main}>
      <ConfirmWrapper onSet={onSet} id="position-edit" layout="box">
        <p>{translate('position-edit:confirm')}</p>
        <p>
          <Info label={label}>
            <Color styleName="primary-3">
              <Money currency={currency} value={position[target]} />
              <span> → </span>
            </Color>
            <Money currency={currency} value={value} />
          </Info>
        </p>
      </ConfirmWrapper>
    </div>
  );
};

PositionEditConfirmBoxView.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]),
  position: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionEditConfirmBoxView;
