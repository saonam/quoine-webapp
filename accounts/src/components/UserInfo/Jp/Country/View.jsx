import React from 'react';

const UserInfoCountryView = ({ country }) => (
  country ? (
    <div>
      {country.name}
    </div>
  ) : null
);

UserInfoCountryView.propTypes = {
  country: React.PropTypes.shape({}),
};

export default UserInfoCountryView;
