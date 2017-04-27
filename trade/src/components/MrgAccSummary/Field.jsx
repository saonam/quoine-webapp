import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const MrgAccSummaryField = ({ id, children }) => (
  <Field label={translate(`mrg-acc:${id}`)} layout="reverse">
    {children}
  </Field>
);

MrgAccSummaryField.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MrgAccSummaryField;
