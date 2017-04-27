import PropTypes from 'prop-types';
import React from 'react';

import Field from '@quoine/components/Field';

const UserForm4JpReviewItem = ({ label, children }) => (
  <Field label={label || ''} layout="1:2">
    {children}
  </Field>
);

UserForm4JpReviewItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default UserForm4JpReviewItem;
