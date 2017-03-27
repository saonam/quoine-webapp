import { bitmex } from '@quoine/resources';
import * as normalize from './normalize';

export const loadAll = () => bitmex.getReady()
  .then(() => [normalize.BASE_ACCOUNT])
  .catch(() => [])
  .then(response => Promise.resolve(response));

export const loadDetail = () => (
  Promise.resolve(normalize.BASE_ACCOUNT)
);

export const subscribe = (payload, onUpdate) => (
  bitmex.subscribe(
    'margin', 'margin',
    ({ data }) => onUpdate(normalize.update(data)),
  )
);
