import React from 'react';

const SignUpBody4JpReviewAddress = ({ address }) => (
  <div>
    <p>〒{address.zip}</p>
    <p>{address.prefecture} {address.municipality}</p>
    <p>{address.street} {address.building}</p>
  </div>
);

SignUpBody4JpReviewAddress.propTypes = {
  address: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewAddress;
