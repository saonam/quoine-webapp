import React from 'react';
import translate from '@quoine/translate';

import Input from '@quoine/components/Input';
import TextBoxNumber from '@quoine/components/TextBoxNumber';

import Info from 'components/Withdrawal/Info';

const WdrInputQuantity = ({ form, onChange }) => (
  <div>
    <Input
      id="withdrawal-quantity"
      label={translate('withdrawal:quantity')}
    >
      <TextBoxNumber
        value={form.quantity}
        onChange={onChange.quantity}
        required
      />
    </Input>
    <Info form={form} />
  </div>
);

WdrInputQuantity.propTypes = {
  form: React.PropTypes.shape({}).isRequired,
  onChange: React.PropTypes.objectOf(React.PropTypes.func).isRequired,
};

export default WdrInputQuantity;
