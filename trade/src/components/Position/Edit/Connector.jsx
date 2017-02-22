import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  activity: state.confirmations.activities['position-edit-confirm'],
  error: state.positionItem.error,
});

export default connect(mapStateToProps)(View);
