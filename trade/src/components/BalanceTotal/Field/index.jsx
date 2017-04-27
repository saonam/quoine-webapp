import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import ColorFlashing from '@quoine/components/ColorFlashing';
import Money from '@quoine/components/Money';
import Field from '@quoine/components/Field';

const BalanceTotalField = ({ id, value, currency }) => (
  <Field label={translate(`balance-total:${id}`)} layout="justify">
    <ColorFlashing value={value}>
      <Money value={value} currency={currency} />
    </ColorFlashing>
  </Field>
);

BalanceTotalField.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default BalanceTotalField;
