import quoine from '@quoine/resources/quoine';
import bitmex from '@quoine/resources/bitmex';
import normalize from './normalize';

const availableActions = ['insert', 'update', 'partial'];

const setLeverage = (product, leverage) => (
  quoine.post(`/futures/products/${product}/change_leverage`, {
    body: { leverage },
  })
);

const subscribe = (account, onUpdate) => (
  bitmex.subscribe(
    'position', 'position',
    ({ action, data }) => {
      if (availableActions.indexOf(action) !== -1) {
        onUpdate(normalize[action](data));
      }
    },
  )
);

const unsubscribe = () => (
  bitmex.unsubscribe('position', 'position')
);

// fake load to satisfy specs
const load = () => Promise.resolve({
  models: [],
  page: Infinity,
});

export default { load, subscribe, unsubscribe, setLeverage };
