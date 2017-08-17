import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

const WdrMemoId = ({ form, onChange }) => (
  <Field label={translate('withdrawal:memo-id')}>
    <TextInput
      value={form.memoId}
      onChange={onChange.memoId}
      border
      required
    />
  </Field>
);

WdrMemoId.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrMemoId;
