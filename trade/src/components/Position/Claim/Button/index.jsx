import { connect } from 'react-redux';
import { TYPES } from 'states/positionItem';

import View from './View';

const mapStateToProps = state => ({
  claim: state.positionItem.claim,
});

const mapDispatchToProps = (dispatch, props) => ({
  onClaim: () => {
    dispatch({
      type: TYPES.UPDATE,
      payload: {
        id: props.position.id,
        target: 'claim',
      },
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
