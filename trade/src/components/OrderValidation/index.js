import { connect } from 'react-redux';

import makeGetOrderValidation from 'selectors/makeGetOrderValidation';

import View from './View';

const makeMapStateToProps = () => {
  const getValidation = makeGetOrderValidation();
  const mapStateToProps = (state, props) => ({
    validation: getValidation(state, props),
    error: state.orderEntry.error,
  });
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(View);
