import React from 'react';

import { isQUOINEJp } from 'components/SignUp/utils';

import Pte from './Pte';
import Jp from './Jp';

const SignUpBody4 = ({ form, ...others }) => {
  const Detail = isQUOINEJp(form) ? Jp : Pte;
  return <Detail form={form} {...others} />;
};

SignUpBody4.propTypes = {
  form: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default SignUpBody4;
