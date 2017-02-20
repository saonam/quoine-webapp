import { connect } from 'react-redux';

import View from './View';

const mapStateToProps = state => ({
  symbol: state.trading.product,
});

export default connect(mapStateToProps)(View);
