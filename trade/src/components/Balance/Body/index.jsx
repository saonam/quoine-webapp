import { connect } from 'react-redux';

import Container from './Container';

const mapStateToProps = (state) => ({
  currency: state.trading.account,
});

export default connect(mapStateToProps)(Container);
