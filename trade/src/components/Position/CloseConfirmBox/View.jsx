import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';
import Money from '@quoine/components/Money';
import Info from '@quoine/components/Field';

import styles from './styles.css';

const PositionCloseConfirmBoxView = ({ onSet, confirming, position }) => (
  confirming && confirming.id === position.id ? (
    <div className={styles.main}>
      <ConfirmWrapper
        onSet={onSet} id="position-close" layout="box"
        yesStyleName="negative-bg full text"
      >
        <p>{translate('position-close:confirm')}</p>
        <p>
          <Info label={translate('position:quantity-close')}>
            <Money
              currency={position.baseCurrency}
              value={confirming.value}
            />
          </Info>
        </p>
      </ConfirmWrapper>
    </div>
  ) : null
);

PositionCloseConfirmBoxView.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]),
  position: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionCloseConfirmBoxView;
