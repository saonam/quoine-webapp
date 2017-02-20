import { quoine } from '@quoine/resources';
import normalize from './normalize';

import load from './load';

const subscribe = ({ currency, userId }, onUpdate) => {
  quoine.subscribe(
    `user_${userId}_account_${currency.toLowerCase()}_orders`,
    'updated',
    (raw) => onUpdate(normalize.one(raw))
  );
};

const unsubscribe = ({ currency, userId }) => {
  quoine.unsubscribe(
    `user_${userId}_account_${currency.toLowerCase()}_orders`,
    'updated'
  );
};

export default { load, subscribe, unsubscribe };
