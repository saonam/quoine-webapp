import { connect } from 'react-redux';

import Container from './Container';

const mapStateToProps = (state) => ({
  product: state.trading.product,
  market: state.trading.market,
  theme: state.themes.current,
  language: state.languages.current,
  double: state.charts.double,
});

export default connect(mapStateToProps)(Container);
