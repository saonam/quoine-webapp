import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import Field from '@quoine/components/Field';
import Select from '@quoine/components/SelectInput';

const modes = ['crypto-watch', 'trading-view'];

const ChartsHeader = ({ mode, onSelectMode }) => (
  <Field label={translate('charts:mode')} layout="inline">
    <Select
      value={mode} onChange={onSelectMode}
      options={modes.map(i => ({ label: translate(`charts:mode-${i}`), value: i }))}
    />
  </Field>
);

ChartsHeader.propTypes = {
  mode: PropTypes.oneOf(['crypto-watch', 'trading-view']).isRequired,
  onSelectMode: PropTypes.func.isRequired,
};

export default ChartsHeader;
