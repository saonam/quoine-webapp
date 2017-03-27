import { select, take } from 'redux-saga/effects';
import { apply } from '@quoine/states/utils';

const getNextArray = ({ state, action, propName }) => {
  const item = action.payload;
  if (state[propName].indexOf(item) === -1) {
    // is out => put in
    return state[propName].concat(item);
  }
  // is in => move out
  return state[propName].filter(key => key !== item);
};

const getNextObject = ({ state, action, propName }) => {
  const item = action.payload;
  const newValue = Object.assign({}, state[propName], {
    [item]: !state[propName][item],
  });
  return newValue;
};

export default ({ TYPES, TOGGLE_TYPE, stateName, propName }) => (
  function* watchToggle() {
    // eslint-disable-next-line no-constant-condition
    while (1) {
      const action = yield take(TOGGLE_TYPE);
      const state = yield select(states => states[stateName]);
      const getNextValue = propName === 'hiddens' ? getNextArray : getNextObject;
      const nextValue = getNextValue({ state, action, propName });
      yield apply(TYPES, {
        [propName]: nextValue,
      });
    }
  }
);
