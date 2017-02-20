import { withBoth } from 'components/OrderEntry/utils';

import React from 'react';

import translate from '@quoine/translate';

import TextBoxNumber from '@quoine/components/TextBoxNumber';
import Input from '@quoine/components/Input';

const OrderEntryFormDistance = ({ form, onChange }) => (
  <Input id="order-entry-distance" label={translate('order:distance')}>
    <TextBoxNumber onChange={onChange} value={form.distance} />
  </Input>
);

OrderEntryFormDistance.propTypes = {
  form: React.PropTypes.shape({
    distance: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
  }),
  onChange: React.PropTypes.func.isRequired,
};

export default withBoth(OrderEntryFormDistance, 'distance');
