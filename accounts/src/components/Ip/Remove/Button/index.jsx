import { connect } from 'react-redux';
import { TYPES } from 'states/ips';

import View from './View';

const mapStateToProps = (state) => ({
  removing: state.ips.removing,
});

const mapDispatchToProps = (dispatch, props) => ({
  onRemove: () => dispatch({
    type: TYPES.REMOVE,
    payload: props.ip.id,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
