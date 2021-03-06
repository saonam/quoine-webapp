import { connect } from 'react-redux';
import getTradingProduct from 'selectors/getTradingProduct';

import View from './View';

const mapStateToProps = (state) => ({
  product: getTradingProduct(state),
  market: state.trading.market,
  theme: state.themes.current,
  language: state.languages.current,
  double: state.charts.double,
  provider: state.charts.provider,
});

export default connect(mapStateToProps)(View);
