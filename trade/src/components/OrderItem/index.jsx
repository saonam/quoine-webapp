import { connect } from 'react-redux';
import { withHorizontal } from '@quoine/components/utils';

import Vertical from './Vertical';
import Horizontal from './Horizontal';

const View = withHorizontal({ Vertical, Horizontal });

const mapStateToProps = (state, props) => ({
  order: state.orderBlotter.models[props.id],
});

export default connect(mapStateToProps)(View);
