import React from 'react';

const SignUpBody4JpReviewOccupation = ({ occupation }) => (
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

SignUpBody4JpReviewOccupation.propTypes = {
  occupation: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewOccupation;
