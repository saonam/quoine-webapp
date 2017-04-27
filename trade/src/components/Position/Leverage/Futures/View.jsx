import PropTypes from 'prop-types';
import React from 'react';

import SelectInput from '@quoine/components/SelectInput';
import Loading from '@quoine/components/LoadingIcon';
import Color from '@quoine/components/Color';

const LEVERAGE_LEVELS = [0, 1, 5, 10, 25, 50, 100];

const options = LEVERAGE_LEVELS.map(level => ({
  value: level, label: level === 0 ? 'Cross' : `${level}x`,
}));

const PositionLeverageFuturesView = ({ busy, leverage, onChange }) => (
  busy ? (
    <Color styleName="accent"><Loading /></Color>
  ) : (
    <SelectInput value={leverage} options={options} onChange={onChange} />
  )
);

PositionLeverageFuturesView.propTypes = {
  busy: PropTypes.bool.isRequired,
  leverage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PositionLeverageFuturesView;
