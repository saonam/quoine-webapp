import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  activity: state.confirmations.activities['order-edit'],
  error: state.orderItem.error,
});

export default connect(mapStateToProps)(View);
