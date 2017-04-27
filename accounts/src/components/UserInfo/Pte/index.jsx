import PropTypes from 'prop-types';
import React from 'react';

import Basic from './Basic';
import Indi from './Indi';
import Corp from './Corp';

const UserInfoJp = ({ info, Group, Item }) => (
  <div>
    <Basic info={info} Item={Item} />
    {info.type === 'individual' ? (
      <Indi info={info.pteIndi} Group={Group} Item={Item} />
    ) : (
      <Corp info={info.pteCorp} Group={Group} Item={Item} />
    )}
  </div>
);

UserInfoJp.propTypes = {
  info: PropTypes.shape({}).isRequired,
  Group: PropTypes.func.isRequired,
  Item: PropTypes.func.isRequired,
};

export default UserInfoJp;
