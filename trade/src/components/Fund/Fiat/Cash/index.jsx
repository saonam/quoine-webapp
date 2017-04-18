import React from 'react';

import Form from './Form';
import Success from './Success';

const FundFiatCash = ({
  form, onChange, busy, onSubmit, success, onSuccessDismiss, error,
}) => (
  <div>
    {success ? (
      <Success {...{ success, onSuccessDismiss }} />
    ) : (
      <Form {...{ form, onChange, busy, onSubmit, error }} />
    )}
  </div>
);

FundFiatCash.propTypes = {
  ...Form.propTypes,
  ...Success.propTypes,
  // remove onClose from form propTypes
  // eslint-disable-next-line react/forbid-prop-types
  onClose: React.PropTypes.any,
};

export default FundFiatCash;
