import React from 'react';

import ReportWrapper from '@quoine/components/ReportWrapper';

import Body from './Body';

const MrgAccDetailReport = ({ onSet, result }) => (
  <ReportWrapper onSet={onSet} layout="hero" id="mrg-acc-close">
    <Body result={result} />
  </ReportWrapper>
);

MrgAccDetailReport.propTypes = {
  onSet: React.PropTypes.func.isRequired,
  result: Body.propTypes.result,
};

export default MrgAccDetailReport;
