import PropTypes from 'prop-types';
import React from 'react';

import translate from '@quoine/translate';

import CheckboxInput from '@quoine/components/CheckboxInput';
import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

const DailyReportView = ({ value, onToggle, busy }) => (
  busy ? (
    <LoadingIconWrapper type="height" />
  ) : (
    <CheckboxInput id="daily-report" value={value} onChange={onToggle}>
      {translate('daily-report:label')}
    </CheckboxInput>
  )
);

DailyReportView.propTypes = {
  onToggle: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  busy: PropTypes.bool.isRequired,
};

export default DailyReportView;
