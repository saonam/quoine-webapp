import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  activity: state.confirmations.activities['order-cancel'],
});

export default connect(mapStateToProps)(View);
