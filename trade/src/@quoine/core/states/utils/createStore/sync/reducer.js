import TYPES from './TYPES';

// be careful, this work with the whole app state
const syncReducer = (state, action) => {
  if (action.type !== TYPES.APPLY) { return state; }
  return action.payload;
};

export default syncReducer;
