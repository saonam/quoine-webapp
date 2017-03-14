import React from 'react';

const SignUpBody4JpReviewDatee = ({ value, year, month, date }) => {
  const obj = new Date(value * 1000);
  return (
    <p>
      {year ? (
        <span>{obj.getFullYear()}年</span>
      ) : null}
      {month ? (
        <span>{obj.getMonth() + 1}月</span>
      ) : null}
      {date ? (
        <span>{obj.getDate()}日</span>
      ) : null}
    </p>
  );
};

SignUpBody4JpReviewDatee.propTypes = {
  value: React.PropTypes.number.isRequired,
  year: React.PropTypes.bool,
  month: React.PropTypes.bool,
  date: React.PropTypes.bool,
};

SignUpBody4JpReviewDatee.defaultProps = {
  date: true,
  month: true,
  year: true,
};

export default SignUpBody4JpReviewDatee;
