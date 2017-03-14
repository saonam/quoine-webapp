import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  market: state.trading.market,
  user: state.user,
});

export default connect(mapStateToProps)(View);
