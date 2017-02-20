import { connect } from 'react-redux';

import makeGetCalculation from 'selectors/makeGetOrderCalculation';

import View from './View';

const makeMapStateToProps = () => {
  const getCalculation = makeGetCalculation();
  const mapStateToProps = (state, props) => ({
    calculation: getCalculation(state, props),
  });
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(View);
