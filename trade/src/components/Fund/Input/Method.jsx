import React from 'react';
import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import Select from '@quoine/components/Select';

const FundInputMethod = ({ form, onChange }) => (
  <Input id="fund-method" label={translate('fund:method')}>
    <Select
      value={form.method} onChange={onChange.method}
      options={['cash', 'bank'].map(value => ({
        value, label: translate(`fund:method-${value}`),
      }))}
    />
  </Input>
);

FundInputMethod.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default FundInputMethod;
