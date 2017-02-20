import { connect } from 'react-redux';
import { TYPES } from 'states/orderEntry';

import makeGetOrderValidation from 'selectors/makeGetOrderValidation';

import View from './View';

const makeMapStateToProps = () => {
  const getValidation = makeGetOrderValidation();
  const mapStateToProps = (state, props) => ({
    validation: getValidation(state, props),
    submitting: state.orderEntry.submitting,
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch, props) => ({
  onSetForm: () => dispatch({
    type: TYPES.SET_FORM,
    payload: { propName: 'side', value: props.side },
  }),
  onSubmit: () => dispatch({
    type: TYPES.SUBMIT, payload: props.side,
  }),
});

export default connect(makeMapStateToProps, mapDispatchToProps)(View);
