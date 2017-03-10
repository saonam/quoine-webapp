import { connect } from 'react-redux';
import { TYPES } from 'states/wdrBank';

import View from './View';

const mapDispatchToProps = (dispatch, props) => ({
  onEdit: () => dispatch({
    type: TYPES.APPLY, payload: { editting: { form: props.bank } },
  }),
});

export default connect(null, mapDispatchToProps)(View);
