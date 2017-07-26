import validateQuantity from './quantity';
import validatePrice from './price';
import validateDirection from './direction';
import validateDistance from './distance';

const validateFull = [
  validateQuantity,
  validatePrice,
  validateDistance,
  validateDirection,
];

const validateCancel = [
  validatePrice,
  validateDistance,
  validateDirection,
];

const validate = (order, state, target) => {
  const validateFuncs = target === 'cancel' ? validateCancel : validateFull;
  const mrgAcc = state.mrgAccs.models[`${order.account}${order.product}`];
  const orderBook = state.orderBook;

  for (let i = validateFuncs.length - 1; i >= 0; i -= 1) {
    const result = validateFuncs[i]({ order, mrgAcc, orderBook });
    if (result) { return result; }
  }

  return '';
};

const validateWrapper = (order, state, target) => {
  const result = validate(order, state, target);
  return result ? `order-error:${result}` : result;
};

export default validateWrapper;
