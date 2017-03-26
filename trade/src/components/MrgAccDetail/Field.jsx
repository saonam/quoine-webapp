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
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export default MrgAccDetailField;
