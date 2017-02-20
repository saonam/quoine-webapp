import { connect } from 'react-redux';
import makeGetAccount from '@quoine/selectors/makeGetAccount';

import View from './View';

const makeMapStateToProps = () => {
  const getAccount = makeGetAccount();
  return (state, props) => ({
    account: getAccount(state, props),
  });
};

export default connect(makeMapStateToProps)(View);
