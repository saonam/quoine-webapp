import { quoine } from '@quoine/resources';

const setLeverage = ({ product, leverage }) => (
  quoine.post(`/futures/products/${product}/change_leverage`, {
    body: { leverage },
    errorPrefix: 'position',
  })
);

const close = ({ id, value }) => (
  quoine.post(`/trades/${id}/close`, {
    body: { closed_quantity: value },
    errorPrefix: 'position',
  })
);

const normalizeTarget = (target) => (
  target === 'stopLoss' ? 'stop_loss' : 'take_profit'
);

const edit = ({ id, target, value }) => (
  quoine.put(`/trades/${id}`, {
    body: {
      trade: { [normalizeTarget(target)]: value },
    },
    errorPrefix: 'position',
  })
);

const claim = ({ id }) => (
  quoine.put(`/trades/${id}/claim`, {
    errorPrefix: 'position',
  })
);

export default { setLeverage, close, claim, edit };
