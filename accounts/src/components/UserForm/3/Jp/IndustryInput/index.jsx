import React from 'react';

import Wrapper from '@quoine/components/FormOnChangeWrapper';

import View from './View';

const JpIndustryInput = (props) => (
  <Wrapper View={View} initialForm={props.value} {...props} />
);

JpIndustryInput.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
};

export default JpIndustryInput;
