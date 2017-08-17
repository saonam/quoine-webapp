import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

const WdrMemoHash = ({ form, onChange }) => (
  <Field label={translate('withdrawal:memo-hash')}>
    <TextInput
      value={form.memoHash}
      onChange={onChange.memoHash}
      border
      required
    />
  </Field>
);

WdrMemoHash.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrMemoHash;
