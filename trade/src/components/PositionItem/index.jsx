import { connect } from 'react-redux';
import { withHorizontal } from '@quoine/components/utils';
import makeGetPosition from 'selectors/makeGetPosition';

import Vertical from './Vertical';
import Horizontal from './Horizontal';

const View = withHorizontal({ Vertical, Horizontal });

const makeMapStateToProps = () => {
  const getPosition = makeGetPosition();
  return (state, props) => ({
    position: getPosition(state, props),
  });
};

export default connect(makeMapStateToProps)(View);
