import PropTypes from 'prop-types';
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
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SettingsRow;
