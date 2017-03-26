import React from 'react';

import translate from '@quoine/translate';

import SelectInput from '@quoine/components/SelectInput';
import Field from 'components/Transfer/Field';

const FundInputMethod = ({ form, onChange }) => (
  <Field label={translate('fund:method')}>
    <SelectInput
      value={form.method} onChange={onChange.method}
      options={['cash', 'bank'].map(value => ({
        value, label: translate(`fund:method-${value}`),
      }))}
      border required
    />
  </Field>
);

FundInputMethod.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default FundInputMethod;
