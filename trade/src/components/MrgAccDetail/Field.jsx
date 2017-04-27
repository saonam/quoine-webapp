import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';

const MrgAccDetailField = ({ id, children }) => (
  <Field
    label={translate(`mrg-acc:${id}`)}
    layout="jusitfy"
  >
    {children}
  </Field>
);

MrgAccDetailField.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default MrgAccDetailField;
