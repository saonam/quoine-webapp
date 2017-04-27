import PropTypes from 'prop-types';
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
  onSet: PropTypes.func.isRequired,
  confirming: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]),
  position: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default PositionClaimConfirmBoxView;
