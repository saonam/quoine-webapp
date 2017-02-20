import resources from '@quoine/resources/bitmex';
import normalize from './normalize';

export const load = () => Promise.resolve({
  buys: [], sells: [],
});

export const subscribe = ({ symbol }, onUpdate) => (
  resources.subscribe(
    `orderBook10:${symbol}`, 'orderBook10', ({ data }) => (
      onUpdate(normalize(data))
    )
  )
);

export const unsubscribe = ({ symbol }) => (
  resources.unsubscribe(`orderBook10:${symbol}`, 'orderBook10')
);
