import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import SelectInput from '@quoine/components/SelectInput';
import Field from 'components/Transfer/Field';

import styles from './styles.css';

const WdrAddressSelect = ({ current, onChange, all }) => (
  <Field label={translate('wdr-address:address')}>
    <SelectInput
      className={styles.select}
      value={current}
      onChange={onChange}
      options={all.map(crypto => ({
        label: crypto.value, value: crypto.id,
      }))}
      border required
    />
  </Field>
);

WdrAddressSelect.propTypes = {
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  all: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    value: PropTypes.string,
  })).isRequired,
};

export default WdrAddressSelect;
