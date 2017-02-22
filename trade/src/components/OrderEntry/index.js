import { connect } from 'react-redux';
import { CONFIRMS, REPORTS } from '@quoine/states/confirmations';

import getForm from 'selectors/getOrderEntryForm';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities[CONFIRMS.ORDER_ADD],
  reporting: state.confirmations.activities[REPORTS.ORDER_ADD],
  form: getForm(state),
});

export default connect(mapStateToProps)(View);
