import { connect } from 'react-redux';

import getTradingMrgAccs from 'selectors/getTradingMrgAccs';
import getHiddenMrgAccs from 'selectors/getHiddenMrgAccs';
import getRemainMarginProducts from 'selectors/getRemainMarginProducts';

import View from './View';

const mapStateToProps = state => ({
  tradingMrgAccs: getTradingMrgAccs(state),
  hiddenMrgAccs: getHiddenMrgAccs(state),
  remainMarginProducts: getRemainMarginProducts(state),
});

export default connect(mapStateToProps)(View);
