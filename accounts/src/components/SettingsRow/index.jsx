import React from 'react';

import Field from '@quoine/components/Field';

const SettingsRow = ({ label, children }) => (
  <Field
    label={label}
    layout="1:3"
    childrenStyle="overflow-hidden"
  >
    {children}
  </Field>
);

SettingsRow.propTypes = {
  label: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default SettingsRow;
