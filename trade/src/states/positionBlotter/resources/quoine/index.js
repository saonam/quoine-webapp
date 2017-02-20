import { quoine } from '@quoine/resources';
import * as normalize from './normalize';

import load from './load';

const getChannel = ({ currency, userId }) => (
  `user_${userId}_account_${currency.toLowerCase()}_trades`
);

const subscribe = (payload, onUpdate) => {
  const channel = getChannel(payload);
  quoine.subscribe(channel, 'pnl_updated', (raw) => (
    onUpdate(normalize.summary(raw))
  ));
  quoine.subscribe(channel, 'updated', (raw) => (
    onUpdate(normalize.one(raw))
  ));
};

const unsubscribe = (payload) => {
  const channel = getChannel(payload);
  quoine.unsubscribe(channel, 'pnl_updated');
  quoine.unsubscribe(channel, 'updated');
};

export default { load, subscribe, unsubscribe };
