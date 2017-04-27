import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import styles from './styles.css';

const WdrCancelConfirmBox = ({ onSet, confirming, withdrawal }) => (
  confirming && confirming.id === withdrawal.id ? (
    <div className={styles.main}>
      <ConfirmWrapper
        onSet={onSet}
        id="withdrawal-cancel"
        layout="box"
        yesStyleName="negative-bg full text"
      >
        <p>{translate('withdrawal-cancel:confirm')}</p>
      </ConfirmWrapper>
    </div>
  ) : null
);

WdrCancelConfirmBox.propTypes = {
  onSet: PropTypes.func.isRequired,
  confirming: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.bool,
  ]),
  withdrawal: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default WdrCancelConfirmBox;
