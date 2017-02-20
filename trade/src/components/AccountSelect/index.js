import { connect } from 'react-redux';
import getTradingAccounts from 'selectors/getTradingAccounts';

import View from './View';

const mapStateToProps = state => ({
  currencies: getTradingAccounts(state),
});

export default connect(mapStateToProps)(View);
