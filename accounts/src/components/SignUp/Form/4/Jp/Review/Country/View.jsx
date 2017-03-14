import React from 'react';

const SignUpBody4JpReviewCountryView = ({ country }) => (
  country ? (
    <div>
      {country.name}
    </div>
  ) : null
);

SignUpBody4JpReviewCountryView.propTypes = {
  country: React.PropTypes.shape({}),
};

export default SignUpBody4JpReviewCountryView;
