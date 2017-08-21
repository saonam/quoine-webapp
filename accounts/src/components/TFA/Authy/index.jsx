import PropTypes from 'prop-types';
import React from 'react';

import Toggle from 'components/TFA/Toggle';
import AddPhone from './AddPhone';
import Phone from './Phone';
import Request from './Request';

import styles from './styles.css';

const TFAAuthy = ({ tfa, onUpdateTfa, phone, onUpdatePhone }) => (
  phone ? (
    <div>
      <div className={styles.phone}>
        <Phone phone={phone} />
      </div>
      <div className={styles.form}>
        <Toggle
          app="authy" action={tfa ? 'disable' : 'enable'}
          onUpdateTfa={onUpdateTfa}
          Request={Request}
        />
      </div>
    </div>
  ) : (
    <div>
      <AddPhone onSuccess={onUpdatePhone} />
    </div>
  )
);

TFAAuthy.propTypes = {
  tfa: PropTypes.bool.isRequired,
  onUpdateTfa: PropTypes.func.isRequired,
  // ===
  phone: PropTypes.string.isRequired,
  onUpdatePhone: PropTypes.func.isRequired,
};

export default TFAAuthy;
