import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import translate from '@quoine/translate';

import TextBoxNumber from '@quoine/components/TextBoxNumber';
import Input from '@quoine/components/Input';

const OrderEntryFormQuantityDisclose = ({ form, onChange }) => (
  <Input id="order-entry-quantity" label={translate('order:qty-disc')}>
    <TextBoxNumber onChange={onChange} value={form.quantityDisclose} />
  </Input>
);

OrderEntryFormQuantityDisclose.propTypes = {
  form: React.PropTypes.shape({
    quantityDisclose: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    market: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormQuantityDisclose, 'quantityDisclose');
