import { connect } from 'react-redux';
import getTradingAccount from 'selectors/getTradingAccount';

import View from './View';

const mapStateToProps = (state) => ({
  account: getTradingAccount(state),
});

export default connect(mapStateToProps)(View);
