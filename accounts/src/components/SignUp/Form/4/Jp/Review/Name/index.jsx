import React from 'react';

const SignUpBody4JpReviewName = ({ name }) => (
  <div>
    {name.first}
    &nbsp;
    {name.last}
  </div>
);

SignUpBody4JpReviewName.propTypes = {
  name: React.PropTypes.shape({
    first: React.PropTypes.string.isRequired,
    last: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default SignUpBody4JpReviewName;
