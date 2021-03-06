import PropTypes from 'prop-types';
import React from 'react';

import Wrapper from '@quoine/components/FormOnChangeWrapper';

import View from './View';

const JpIndustryInput = (props) => (
  <Wrapper View={View} {...props} />
);

JpIndustryInput.propTypes = {
  value: PropTypes.shape({}).isRequired,
};

export default JpIndustryInput;
