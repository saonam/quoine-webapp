import PropTypes from 'prop-types';
import React from 'react';

import Pte from './Pte';
import Jp from './Jp';

const UserForm4 = ({ form, ...others }) => (
  <div>
    <div style={form.underJFSA ? {} : { display: 'none' }}>
      <Jp form={form} {...others} />
    </div>
    <div style={!form.underJFSA ? {} : { display: 'none' }}>
      <Pte form={form} {...others} />
    </div>
  </div>
);

UserForm4.propTypes = {
  form: PropTypes.shape({
    underJFSA: PropTypes.bool.isRequired,
  }).isRequired,
};

export default UserForm4;
