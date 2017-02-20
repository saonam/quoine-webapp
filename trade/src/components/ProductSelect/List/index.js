import { connect } from 'react-redux';
import getTradingProducts from 'selectors/getTradingProducts';

import View from './View';

const mapStateToProps = state => ({
  symbols: getTradingProducts(state),
  current: state.trading.product,
});

export default connect(mapStateToProps)(View);
