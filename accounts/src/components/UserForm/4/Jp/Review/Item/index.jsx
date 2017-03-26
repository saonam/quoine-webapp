import React from 'react';

import Field from '@quoine/components/Field';

const UserForm4JpReviewItem = ({ label, children }) => (
  <Field label={label || ''} layout="1:2">
    {children}
  </Field>
);

UserForm4JpReviewItem.propTypes = {
  label: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default UserForm4JpReviewItem;
