import React from 'react';

const SignUpBody4JpReviewRelation = ({ relation }) => (
  <div>
    <p>{relation.type}</p>
    {relation.detail ? (<p>{relation.detail}</p>) : null}
  </div>
);

SignUpBody4JpReviewRelation.propTypes = {
  relation: React.PropTypes.shape({}).isRequired,
};

export default SignUpBody4JpReviewRelation;
