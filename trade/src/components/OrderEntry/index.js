import { connect } from 'react-redux';

import getForm from 'selectors/getOrderEntryForm';

import View from './View';

const mapStateToProps = (state) => ({
  activity: state.confirmations.activities['order-add'],
  form: getForm(state),
});

export default connect(mapStateToProps)(View);
