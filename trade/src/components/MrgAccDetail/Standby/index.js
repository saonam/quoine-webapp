import { connect } from 'react-redux';

import getTradingMrgAcc from 'selectors/getTradingMrgAcc';

import View from './View';

const mapStateToProps = (state) => ({
  mrgAcc: getTradingMrgAcc(state),
});

export default connect(mapStateToProps)(View);
