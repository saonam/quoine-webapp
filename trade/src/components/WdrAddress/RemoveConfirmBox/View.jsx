import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ConfirmWrapper from '@quoine/components/ConfirmWrapper';

import styles from './styles.css';

const WdrAddressRemoveConfirmBox = ({ address, confirming, onSet }) => (
  confirming && confirming.id === address.id ? (
    <div className={styles.main}>
      <ConfirmWrapper
        id="address-remove"
        onSet={onSet} layout="box"
        yesStyleName="negative-bg full text"
      >
        <p>{translate('wdr-address:remove-confirm')}</p>
      </ConfirmWrapper>
    </div>
  ) : null
);

WdrAddressRemoveConfirmBox.propTypes = {
  onSet: PropTypes.func.isRequired,
  address: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
  confirming: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ]),
};

export default WdrAddressRemoveConfirmBox;
