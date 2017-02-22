import { connect } from 'react-redux';
import { CONFIRMS, REPORTS } from '@quoine/states/confirmations';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities[CONFIRMS.MRG_ACC_CLOSE],
  reporting: state.confirmations.activities[REPORTS.MRG_ACC_CLOSE],
});

export default connect(mapStateToProps)(View);
