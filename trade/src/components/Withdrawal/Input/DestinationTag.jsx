import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

const WdrDestinationTag = ({ form, onChange }) => (
  <Field label={translate('withdrawal:destination-tag')}>
    <TextInput
      value={form.destinationTag}
      onChange={onChange.destinationTag}
      border
    />
  </Field>
);

WdrDestinationTag.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrDestinationTag;
