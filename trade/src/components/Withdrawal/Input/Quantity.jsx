import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import NumberInput from '@quoine/components/NumberInput';
import Field from 'components/Transfer/Field';

import Info from 'components/Withdrawal/Info';

const WdrInputQuantity = ({ form, onChange }) => (
  <div>
    <Field label={translate('withdrawal:quantity')}>
      <NumberInput
        value={form.quantity}
        onChange={onChange.quantity}
        border
        required
      />
    </Field>
    <Info form={form} />
  </div>
);

WdrInputQuantity.propTypes = {
  form: PropTypes.shape({}).isRequired,
  onChange: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default WdrInputQuantity;
