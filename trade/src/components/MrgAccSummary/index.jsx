import { connect } from 'react-redux';
import makeGetMrgAcc from 'selectors/makeGetMrgAcc';

import View from './View';

const makeMapStateToProps = () => {
  const getMrgAcc = makeGetMrgAcc();
  return (state, props) => ({
    mrgAcc: getMrgAcc(state, props),
  });
};

export default connect(makeMapStateToProps)(View);
