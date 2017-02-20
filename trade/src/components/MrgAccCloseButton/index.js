import { connect } from 'react-redux';
import { TYPES } from 'states/mrgAccs';

import View from './View';

const mapStateToProps = (state) => ({
  closingInfo: state.mrgAccs.closing,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClose: () => dispatch({
    type: TYPES.CLOSE,
    payload: { name: props.mrgAcc.name, side: props.side },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
