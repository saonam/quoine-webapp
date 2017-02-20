import { connect } from 'react-redux';

import Container from './Container';

const mapStateToProps = (state) => ({
  btc: state.accounts.models.BTC,
  futures: state.accounts.models.XBT,
});

export default connect(mapStateToProps)(Container);
