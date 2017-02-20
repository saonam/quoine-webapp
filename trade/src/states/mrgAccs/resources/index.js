import { quoine } from '@quoine/resources';
import * as normalize from './normalize';

export { default as add } from './add';

export { default as close } from './close';

// BIG TODO: this need forceCache because of getMrgAccId
// doesn't know when we add new product
export const load = (currency) => (
  quoine.get(
    `/trading_accounts?with_details=1&funding_currency=${currency}`,
  ).then(normalize.all)
);

// eg: trading_account_21064
// account and product is for normalize
export const subscribe = ({ name, id }, onUpdate) => (
  quoine.subscribe(
    `trading_account_${id}`,
    'info_summary',
    raw => onUpdate(normalize.summary(raw, { name })),
  )
);

export const unsubscribe = ({ id }) => {
  quoine.unsubscribe(`trading_account_${id}`, 'info_summary');
};
