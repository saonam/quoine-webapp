import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import TextInput from '@quoine/components/TextInput';
import Field from 'components/Transfer/Field';

const WdrPaymentId = ({ form, onChange }) => (
  <Field label={translate('withdrawal:payment-id')}>
    <TextInput
      value={form.paymentId}
      onChange={onChange.paymentId}
      border
    />
  </Field>
);

WdrPaymentId.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrPaymentId;
