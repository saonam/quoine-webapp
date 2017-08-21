import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

const WdrMessage = ({ form, onChange }) => (
  <Field label={translate('withdrawal:message')}>
    <TextInput
      value={form.message}
      onChange={onChange.message}
      border
    />
  </Field>
);

WdrMessage.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrMessage;
