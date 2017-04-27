import PropTypes from 'prop-types';
import React from 'react';

const UserInfoName = ({ name }) => (
  <div>
    {name.first}
    &nbsp;
    {name.last}
  </div>
);

UserInfoName.propTypes = {
  name: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfoName;
