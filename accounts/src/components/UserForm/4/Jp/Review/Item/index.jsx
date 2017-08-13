import PropTypes from 'prop-types';
import React from 'react';

import Field from '@quoine/components/Field';

const UserForm4JpReviewItem = ({ label, children, layout }) => (
  <Field label={label || ''} layout={layout || '1:2'}>
    {children}
  </Field>
);

UserForm4JpReviewItem.propTypes = {
  layout: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default UserForm4JpReviewItem;
