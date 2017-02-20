const createReducer = (TYPES, initialState) => {
  const reducer = (state = initialState, action) => {
    if (action.type !== TYPES.APPLY) { return state; }

    const nextState = { ...state, ...action.payload };
    return nextState;
  };
  return reducer;
};

export default createReducer;
