import { bitmex } from '@quoine/resources';
import normalize from './normalize';

import load from './load';

const availableActions = ['insert', 'update', 'partial'];
const subscribe = (payload, onUpdate) => (
  bitmex.subscribe(
    'order', 'order',
    ({ action, data }) => {
      if (availableActions.indexOf(action) !== -1) {
        onUpdate(normalize[action](data));
      }
    },
  )
);

const unsubscribe = () => (
  bitmex.unsubscribe('order', 'order')
);

export default { load, subscribe, unsubscribe };
