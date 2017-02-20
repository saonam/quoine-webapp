import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import styles from './styles.css';

const WdrBankRemoveConfirmBox = ({ confirming, onSet, bank }) => (
  confirming.id === bank.id ? (
    <div className={styles.main}>
      <ConfirmWrapper
        onSet={onSet} id="withdrawal-cancel" layout="box"
        yesStyleName="negative-bg full text"
      >
        <p>{translate('bank:remove-confirm')}</p>
      </ConfirmWrapper>
    </div>
  ) : null
);

WdrBankRemoveConfirmBox.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  bank: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
  }),
  confirming: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
    }),
  ]).isRequired,
};

export default WdrBankRemoveConfirmBox;
