import { createSelector } from 'reselect';

const getRaw = (state, props) => (state.products.models[props.symbol]);

export default () => createSelector(
  [getRaw], (raw) => {
    if (!raw) { return undefined; }

    const priceChange = (raw.last - raw.prev24H) / raw.prev24H;

    return { ...raw, priceChange };
  }
);
