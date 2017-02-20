import { quoine } from '@quoine/resources';

const cancel = ({ id }, { isFutures }) => (
  isFutures ? (
    quoine.del(`/futures/products/symbol/orders/${id}`)
  ) : (
    quoine.put(`/orders/${id}/cancel`)
  )
);

const edit = ({ id, target, value }) => (
  quoine.put(`/orders/${id}`, {
    body: {
      order: { [target]: value },
    },
  })
);

export default { cancel, edit };
