import PropTypes from 'prop-types';
import React from 'react';

const UserInfoOccupation = ({ occupation }) => (
  <div>
    <p>
      {occupation.job}
      {occupation.industry ? (
        <span>&nbsp;–&nbsp;{occupation.industry}</span>
      ) : null}
    </p>
    {occupation.detail ? (
      <p>{occupation.detail}</p>
    ) : null}
    {occupation.name ? (
      <p>{occupation.name}</p>
    ) : null}
  </div>
);

UserInfoOccupation.propTypes = {
  occupation: PropTypes.shape({}).isRequired,
};

export default UserInfoOccupation;
