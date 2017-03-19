import React from 'react';

import Wrapper from '@quoine/components/FormOnChangeWrapper';

import View from './View';

const JpIndustrySelect = (props) => (
  <Wrapper View={View} initialForm={props.value} {...props} />
);

JpIndustrySelect.propTypes = {
  value: React.PropTypes.shape({}).isRequired,
};

export default JpIndustrySelect;
