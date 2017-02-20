import { connect } from 'react-redux';
import makeGetProduct from 'selectors/makeGetProduct';

import View from './View';

const makeMapStateToProps = () => {
  const getProduct = makeGetProduct();
  return (state, props) => ({
    product: getProduct(state, props),
  });
};

export default connect(makeMapStateToProps)(View);
