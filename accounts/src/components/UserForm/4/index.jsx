import React from 'react';

import Pte from './Pte';
import Jp from './Jp';

const UserForm4 = ({ form, ...others }) => {
  const Detail = form.underJFSA ? Jp : Pte;
  return <Detail form={form} {...others} />;
};

UserForm4.propTypes = {
  form: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default UserForm4;
