const migrate = (state) => {
  if (state.orderEntry) {
    return state;
  }

  const orderEntry = {};
  const oldForm = state.orderForm;
  if (oldForm) {
    orderEntry.form = {
      type: oldForm.type,
      quantity: oldForm.quantity,
      quantityDisclose: oldForm.discloseQuantity,
      price: oldForm.price,
      side: oldForm.price,
      // margin
      leverage: oldForm.leverageLevel,
      direction: oldForm.direction,
      // slippage
      slippage: oldForm.direction,
      slippageValue: oldForm.slippageValue,
      // trailing stop
      distance: oldForm.trailingStopValue,
      distanceType: oldForm.trailingStopType,
    };
  }

  return {
    ...state,
    orderEntry,
  };
};

export default migrate;
