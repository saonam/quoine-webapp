import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import TFARequest from '@quoine/components/TFARequest';
import Field from 'components/Transfer/Field';

const WdrInputCode = ({ form, onChange }) => (
  <div>
    <Field label={translate('withdrawal:code')}>
      <TextInput
        value={form.code}
        onChange={onChange.code}
        border
        required
      />
    </Field>
    <TFARequest skipFirst />
  </div>
);

WdrInputCode.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrInputCode;
