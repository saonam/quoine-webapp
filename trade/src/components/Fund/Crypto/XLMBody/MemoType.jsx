import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import SelectInput from '@quoine/components/SelectInput';
import Field from 'components/Transfer/Field';

const types = ['memo_text', 'memo_id', 'memo_hash'];

const FundMemoType = ({ value, onChange }) => (
  <Field label={translate('withdrawal:memo-type')}>
    <SelectInput
      value={value}
      onChange={onChange}
      options={types.map(type => ({
        label: type,
        value: type,
      }))}
      border
      required
    />
  </Field>
);

FundMemoType.propTypes = {
  value: PropTypes.oneOf(types).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FundMemoType;
