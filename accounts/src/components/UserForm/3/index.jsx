import PropTypes from 'prop-types';
import React from 'react';

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

const UserForm3 = ({ form, ...others }) => {
  const operator = form.underJFSA ? 'jp' : 'pte';
  const Detail = Details[operator][form.type] || PteIndi;
  return <Detail form={form} {...others} />;
};

UserForm3.propTypes = {
  form: PropTypes.shape({
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserForm3;
