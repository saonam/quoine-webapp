import validateCloseQuantity from './closeQuantity';
import validateStopLoss from './stopLoss';
import validateTakeProfit from './takeProfit';

const validateFuncs = [
  validateCloseQuantity,
  validateTakeProfit,
  validateStopLoss,
];

const validatePosition = (position, state) => {
  const product = state.products.models[position.product];

  for (let i = validateFuncs.length - 1; i >= 0; i -= 1) {
    const result = validateFuncs[i](position, product);
    if (result) { return result; }
  }

  return false;
};

const validateWrapper = (position, state) => {
  const result = validatePosition(position, state);
  return result ? `position-error:${result}` : result;
};

export default validateWrapper;
