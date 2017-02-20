import React from 'react';

import translate from '@quoine/translate';

import Checkbox from '@quoine/components/Checkbox';
import LoadingIconWrapper from '@quoine/components/LoadingIconWrapper';

const DailyReportView = ({ value, onToggle, busy }) => (
  busy ? (
    <LoadingIconWrapper type="height" />
  ) : (
    <Checkbox id="daily-report" value={value} onChange={onToggle}>
      {translate('daily-report:label')}
    </Checkbox>
  )
);

DailyReportView.propTypes = {
  onToggle: React.PropTypes.func.isRequired,
  value: React.PropTypes.bool.isRequired,
  busy: React.PropTypes.bool.isRequired,
};

export default DailyReportView;
