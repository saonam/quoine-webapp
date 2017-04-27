import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import RadiosInput from '@quoine/components/RadiosInput';

const YesNoSelect = ({ id, value, onChange }) => (
  <RadiosInput
    id={id}
    value={value}
    onChange={onChange}
    options={['yes', 'no'].map(key => ({
      label: translate(`yes-no:${key}`),
      value: key,
    }))}
  />
);

YesNoSelect.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default YesNoSelect;
