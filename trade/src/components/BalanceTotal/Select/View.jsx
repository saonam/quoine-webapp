import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import SelectInput from '@quoine/components/SelectInput';

const BalanceTotalSelect = ({ all, value, onChange }) => {
  const options = all
    .filter(currency => currency !== 'XBT')
    .map(account => ({
      label: account,
      value: account,
    }));

  return (
    <Field label={translate('balance-total:currency')} layout="inline">
      <SelectInput
        options={options}
        value={value}
        onChange={onChange}
      />
    </Field>
  );
};

BalanceTotalSelect.propTypes = {
  value: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  all: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

export default BalanceTotalSelect;
