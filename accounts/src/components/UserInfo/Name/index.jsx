import React from 'react';

const UserInfoName = ({ name }) => (
  <div>
    {name.first}
    &nbsp;
    {name.last}
  </div>
);

UserInfoName.propTypes = {
  name: React.PropTypes.shape({
    first: React.PropTypes.string.isRequired,
    last: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default UserInfoName;
