import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import TFARequest from '@quoine/components/TFARequest';

import styles from './styles.css';

const IpInputs = ({ form, onChange }) => (
  <div>
    <div className={styles.row}>
      <div className={styles.label}>
        {translate('ip:input-ip')}
      </div>
      <div className={styles.input}>
        <TextInput
          type="text" value={form.ip}
          onChange={onChange.ip}
          pattern="^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$"
          title={translate('ip-error:ip-wrong-format')}
          border required
        />
      </div>
    </div>

    <div className={styles.row}>
      <div className={styles.label}>
        {translate('ip:input-code')}
      </div>
      <div className={styles.input}>
        <TextInput
          type="text" value={form.code}
          onChange={onChange.code}
          border required
        />
      </div>
      <div className={styles.button}>
        <TFARequest skipFirst useEmail />
      </div>
    </div>
  </div>
);

IpInputs.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default IpInputs;
