import PropTypes from 'prop-types';
import React from 'react';

import WdrBankForm from 'components/WdrBank/Form';
import WdrAddressForm from 'components/WdrAddress/Form';
import WdrAddressVerify from 'components/WdrAddress/VerifyBox';

import Standby from './Standby';

import styles from './styles.css';

const Withdrawal = ({ wdrBank, wdrAddress }) => {
  const isVisible =
    wdrBank.adding ||
    wdrBank.editting ||
    wdrAddress.adding ||
    wdrAddress.verifying;
  return (
    <div className={styles.main}>
      <div
        // Hide `Standby` by `css` to keep Withdrawal Data
        className={isVisible ? styles.none : styles.body}
      >
        <Standby />
      </div>
      {wdrBank.adding ? <WdrBankForm action="add" /> : null}
      {wdrBank.editting ? <WdrBankForm action="edit" /> : null}
      {wdrAddress.adding ? <WdrAddressForm action="add" /> : null}
      {wdrAddress.verifying ? <WdrAddressVerify /> : null}
    </div>
  );
};

Withdrawal.propTypes = {
  wdrBank: PropTypes.shape({}).isRequired,
  wdrAddress: PropTypes.shape({}).isRequired,
};

export default Withdrawal;
