import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = (state) => ({
  market: state.trading.market,
});

export default connect(mapStateToProps)(View);
