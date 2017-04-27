import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import SelectInput from '@quoine/components/SelectInput';
import Field from 'components/Transfer/Field';

const WdrBankSelect = ({ current, onChange, all }) => (
  <Field label={translate('withdrawal:bank')}>
    <SelectInput
      value={current}
      onChange={onChange}
      options={all.map(bank => ({
        label: bank['bank-name'], value: bank.id,
      }))}
      border required
    />
  </Field>
);

WdrBankSelect.propTypes = {
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  all: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default WdrBankSelect;
