import { connect } from 'react-redux';
import { TYPES } from 'states/orderEntry';

const withOrderEntryOnChange = (View, propName) => {
  const mapDispatchToProps = (dispatch) => ({
    onChange: (value) => dispatch({
      type: TYPES.SET_FORM,
      payload: { propName, value },
    }),
  });
  return connect(null, mapDispatchToProps)(View);
};

export default withOrderEntryOnChange;
