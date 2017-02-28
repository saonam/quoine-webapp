const trading = (state) => {
  if (state.trading) {
    return state;
  }

  let next = {};
  const oldCurrent = state.current || {};
  const { account, market, product } = oldCurrent;
  if (account && market && product) {
    next = { account, product, market };
  }

  return {
    ...state,
    next,
  };
};

export default trading;
