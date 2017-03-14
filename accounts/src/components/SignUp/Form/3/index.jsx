import React from 'react';

import { isQUOINEJp } from 'components/SignUp/utils';

import PteIndi from './Pte/Indi';
import PteCorp from './Pte/Corp';
import JpIndi from './Jp/Indi';
import JpCorp from './Jp/Corp';

const Details = {
  pte: {
    individual: PteIndi,
    corporate: PteCorp,
  },
  jp: {
    individual: JpIndi,
    corporate: JpCorp,
  },
};

const SignUpBody3 = ({ form, ...others }) => {
  const operator = isQUOINEJp(form) ? 'jp' : 'pte';
  const Detail = Details[operator][form.type];
  return <Detail form={form} {...others} />;
};

SignUpBody3.propTypes = {
  form: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default SignUpBody3;
