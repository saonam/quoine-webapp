import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const WithdrawalItemDetailField = ({ id, currency, children }) => (
  <Field label={translate(`withdrawal:${id}`, { currency })} layout="inline">
    {children}
  </Field>
);

WithdrawalItemDetailField.propTypes = {
  id: PropTypes.string.isRequired,
  currency: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default WithdrawalItemDetailField;
