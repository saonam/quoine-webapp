import { connect } from 'react-redux';
import { TYPES } from 'states/orderEntry';

const withOrderEntryOnChange = (View, propName) => {
  const mapDispatchToProps = (dispatch) => ({
    onChange: (e) => dispatch({
      type: TYPES.SET_FORM,
      payload: { propName, value: e.target.value },
    }),
  });
  return connect(null, mapDispatchToProps)(View);
};

export default withOrderEntryOnChange;
