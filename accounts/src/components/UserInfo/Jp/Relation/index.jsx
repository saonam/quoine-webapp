import PropTypes from 'prop-types';
import React from 'react';

const UserInfoRelation = ({ relation }) => (
  <div>
    <p>{relation.type}</p>
    {relation.detail ? (<p>{relation.detail}</p>) : null}
  </div>
);

UserInfoRelation.propTypes = {
  relation: PropTypes.shape({}).isRequired,
};

export default UserInfoRelation;
