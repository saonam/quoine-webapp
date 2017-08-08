import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';
import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import styles from './styles.css';

const TokenRemoveConfirm = ({ onSet }) => (
  <ConfirmWrapper
    onSet={onSet}
    yesLabel={translate('token:remove-action-yes')}
    yesStyleName="negative-bg full text"
    noLabel={translate('token:remove-action-no')}
    id="tokens-remove"
    layout="box"
  >
    <p className={styles.text}>
      {translate('token:remove-description')}
    </p>
  </ConfirmWrapper>
);

TokenRemoveConfirm.propTypes = {
  onSet: PropTypes.func.isRequired,
};

export default TokenRemoveConfirm;
