import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const FundItemDetailField = ({ id, children }) => (
  <Field label={translate(`fund:${id}`)} layout="inline">
    {children}
  </Field>
);

FundItemDetailField.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default FundItemDetailField;
