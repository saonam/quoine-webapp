import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const FundItemDetailField = ({ id, children }) => (
  <Field label={translate(`fund:${id}`)} layout="inline">
    {children}
  </Field>
);

FundItemDetailField.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FundItemDetailField;
