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
  current: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
  all: React.PropTypes.arrayOf(React.PropTypes.shape({})).isRequired,
};

export default WdrBankSelect;
