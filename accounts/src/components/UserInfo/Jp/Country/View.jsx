import PropTypes from 'prop-types';
import React from 'react';

const UserInfoCountryView = ({ country }) => (
  country ? (
    <div>
      {country.name}
    </div>
  ) : null
);

UserInfoCountryView.propTypes = {
  country: PropTypes.shape({}),
};

export default UserInfoCountryView;
