import PropTypes from 'prop-types';
import React from 'react';

const UserInfoAddress = ({ address }) => (
  <div>
    <p>〒{address.zip}</p>
    <p>{address.prefecture} {address.municipality}</p>
    <p>{address.street} {address.building}</p>
  </div>
);

UserInfoAddress.propTypes = {
  address: PropTypes.shape({}).isRequired,
};

export default UserInfoAddress;
