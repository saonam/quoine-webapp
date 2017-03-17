import React from 'react';

import Wrapper from '@quoine/components/FormOnChangeWrapper';

import View from './View';

import initialForm from './initialForm';

const JpIndustrySelect = (props) => (
  <Wrapper View={View} initialForm={initialForm} {...props} />
);

export default JpIndustrySelect;
