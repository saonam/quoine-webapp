import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import styles from './styles.css';

const PositionClaimConfirmBoxView = ({ onSet, confirming, position }) => (
  confirming && confirming.id === position.id ? (
    <div className={styles.main}>
      <ConfirmWrapper
        onSet={onSet} id="position-claim" layout="box"
        yesStyleName="accent-bg full text"
      >
        <p>{translate('position-claim:confirm')}</p>
      </ConfirmWrapper>
    </div>
  ) : null
);

PositionClaimConfirmBoxView.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]),
  position: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionClaimConfirmBoxView;
