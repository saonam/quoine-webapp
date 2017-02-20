import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import translate from '@quoine/translate';

import TextBoxNumber from '@quoine/components/TextBoxNumber';
import Input from '@quoine/components/Input';

const OrderEntryFormQuantity = ({ form, onChange }) => (
  <Input id="order-entry-quantity" label={translate('order:quantity')}>
    <TextBoxNumber onChange={onChange} value={form.quantity} />
  </Input>
);

OrderEntryFormQuantity.propTypes = {
  form: React.PropTypes.shape({
    quantity: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormQuantity, 'quantity');
