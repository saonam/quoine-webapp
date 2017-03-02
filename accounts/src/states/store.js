import { createStore } from '@quoine/states/utils';

import languages from '@quoine/states/languages';
import themes from '@quoine/states/themes';
import tabs from '@quoine/states/tabs';
import user from '@quoine/states/user';
import confirmations from '@quoine/states/confirmations';
import notifications from '@quoine/states/notifications';

import session from 'states/session';
import tokens from 'states/tokens';

const states = {
  languages,
  themes,
  tabs,
  user,
  confirmations,
  notifications,

  session,
  tokens,
};

export default createStore(states);
