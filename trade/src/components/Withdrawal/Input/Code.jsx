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
    <TFARequest skipFirst useEmail />
  </div>
);

WdrInputCode.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default WdrInputCode;
