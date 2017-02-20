import { select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

import TYPES from '../TYPES';

const TYPES_WITH_PRICE = ['limit', 'stop'];

function* onSetForm(action) {
  const { propName, value } = action.payload;
  const orgForm = yield select(state => state.orderEntry.form);
  const form = { ...orgForm };

  switch (propName) {
    case 'quantity':
      form.quantity = value;
      form.quantityDisclose = value;
      break;
    case 'price':
      form.price = String(value);
      if (TYPES_WITH_PRICE.indexOf(form.type) === -1) {
        form.type = 'limit';
      }
      break;
    default:
      form[propName] = value;
  }

  const nextState = { form };
  if (propName !== 'side') {
    nextState.error = false;
  }
  yield apply(TYPES, nextState);
}

export default function* watchForm() {
  while (1) {
    const action = yield take(TYPES.SET_FORM);
    yield onSetForm(action);
  }
}
