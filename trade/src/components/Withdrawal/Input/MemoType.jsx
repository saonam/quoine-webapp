import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import SelectInput from '@quoine/components/SelectInput';
import Field from 'components/Transfer/Field';

const types = ['memo_text', 'memo_id', 'memo_hash'];

const WdrMemoType = ({ form, onChange }) => (
  <Field label={translate('withdrawal:memo-type')}>
    <SelectInput
      value={form.memoType}
      onChange={onChange.memoType}
      options={types.map(type => ({
        label: type,
        value: type,
      }))}
      border
      required
    />
  </Field>
);

WdrMemoType.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrMemoType;
