import React from 'react';

import Field from '@quoine/components/Field';

import translate from '@quoine/translate';

const OrderEntryReportField = ({ id, children }) => (
  <Field
    label={translate(`order:${id}`)}
    layout="justify"
  >
    {children}
  </Field>
);

OrderEntryReportField.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default OrderEntryReportField;
