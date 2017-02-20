import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  activity: state.confirmations.activities['mrg-acc-close'],
});

export default connect(mapStateToProps)(View);
