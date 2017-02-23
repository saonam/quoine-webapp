const trading = (state) => {
  if (state.trading) {
    return state;
  }

  let trading = {};
  const oldCurrent = state.current || {};
  const { account, market, product } = oldCurrent;
  if (account && market && product) {
    trading = { account, product, market };
  }
  
  return {
    ...state,
    trading,
  };
}

export default trading;
