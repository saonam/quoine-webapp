import { connect } from 'react-redux';

import getForm from 'selectors/getOrderEntryForm';

import View from './View';

const mapStateToProps = (state) => ({
  confirming: state.confirmations.activities['order-add-confirm'],
  reporting: state.confirmations.activities['order-add-report'],
  form: getForm(state),
});

export default connect(mapStateToProps)(View);
