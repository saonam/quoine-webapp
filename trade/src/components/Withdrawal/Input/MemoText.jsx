import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

const WdrMemoText = ({ form, onChange }) => (
  <Field label={translate('withdrawal:memo-text')}>
    <TextInput
      value={form.memoText}
      onChange={onChange.memoText}
      border
      required
    />
  </Field>
);

WdrMemoText.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrMemoText;
