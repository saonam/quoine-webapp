import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import styles from './styles.css';

const WdrBankRemoveConfirmBox = ({ confirming, onSet, bank }) => (
  confirming && confirming.id === bank.id ? (
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
  onSet: PropTypes.func.isRequired,
  bank: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  confirming: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ]),
};

export default WdrBankRemoveConfirmBox;
