import { quoine } from '@quoine/resources';
import normalize from './normalize';

export const load = ({ symbol, id }) => (
  quoine.get(`/executions?product_id=${id}`, {
    // dont use cache here because it will load multiple times
    // with the same url but expect different result
    // (when we switch product back and forth)
    useCache: false,
  })
  .then(raw => normalize.all(raw, symbol))
);

export const subscribe = ({ symbol }, onUpdate) => (
  quoine.subscribe(
    `executions_cash_${symbol.toLowerCase()}`,
    'created',
    (raw) => onUpdate(normalize.one(raw, symbol))
  )
);

export const unsubscribe = ({ symbol }) => (
  quoine.unsubscribe(`executions_cash_${symbol.toLowerCase()}`, 'created')
);
