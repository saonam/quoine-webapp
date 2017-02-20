import React from 'react';

import Form from './Form';
import Success from './Success';

const FundFiatCash = ({
  form, onChange, busy, onSubmit, success, onSuccessDismiss,
}) => (
  <div>
    {success ? (
      <Success {...{ success, onSuccessDismiss }} />
    ) : (
      <Form {...{ form, onChange, busy, onSubmit }} />
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
