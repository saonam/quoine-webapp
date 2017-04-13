import validateQuantity from './quantity';
import validatePrice from './price';
import validateDirection from './direction';

const validateFuncs = [
  validateQuantity,
  validatePrice,
  validateDirection,
];

const validate = (order, state) => {
  const mrgAcc = state.mrgAccs.models[`${order.account}${order.product}`];

  for (let i = validateFuncs.length - 1; i >= 0; i -= 1) {
    const result = validateFuncs[i]({ order, mrgAcc });
    if (result) { return result; }
  }

  return '';
};

const validateWrapper = (order, state) => {
  const result = validate(order, state);
  return result ? `order-error:${result}` : result;
};

export default validateWrapper;
