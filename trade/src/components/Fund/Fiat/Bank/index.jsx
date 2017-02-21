import React from 'react';

import translate from '@quoine/translate';

import Toggler from '@quoine/components/Toggler';

import Form from './Form';
import Success from './Success';
import Info from './Info';
import Standby from './Standby';

import styles from './styles.css';

const FundFiatBank = ({
  form, onChange, busy, onSubmit, success, onSuccessDismiss, error,
}) => (
  <div>
    <div className={styles.item}>
      {success ? (
        <Success {...{ success, onSuccessDismiss }} />
      ) : (
        <Toggler
          Standby={Standby} Active={Form}
          {...{ form, onChange, busy, onSubmit, error }}
        />
      )}
    </div>
    <p className={styles.help}>
      {translate('fund-bank:help-2')}
    </p>
    <div className={styles.item}>
      <Info account={form.account} />
    </div>
    <p className={styles.helpLight}>
      {translate('fund-bank:help-2-note')}
    </p>
  </div>
);

FundFiatBank.propTypes = {
  ...Form.propTypes,
  ...Success.propTypes,
  // remove onClose from form propTypes
  // eslint-disable-next-line react/forbid-prop-types
  onClose: React.PropTypes.any,
};

export default FundFiatBank;
