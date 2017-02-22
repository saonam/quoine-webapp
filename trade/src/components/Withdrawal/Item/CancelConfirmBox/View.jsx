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
  onSet: React.PropTypes.func.isRequired,
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.shape({}),
    React.PropTypes.bool,
  ]),
  withdrawal: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }).isRequired,
};

export default WdrCancelConfirmBox;
