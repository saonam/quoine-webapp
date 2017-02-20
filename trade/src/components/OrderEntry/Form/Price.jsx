import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import translate from '@quoine/translate';

import TextBoxNumber from '@quoine/components/TextBoxNumber';
import Input from '@quoine/components/Input';

const OrderEntryFormPrice = ({ form, onChange }) => (
  <Input id="order-entry-price" label={translate('order:price')}>
    <TextBoxNumber onChange={onChange} value={form.price} />
  </Input>
);

OrderEntryFormPrice.propTypes = {
  form: React.PropTypes.shape({
    price: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormPrice, 'price');
