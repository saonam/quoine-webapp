import { createWatchToggle } from '@quoine/states/utils';

import TYPES from '../TYPES';

const watchToggleHidden = createWatchToggle({
  TYPES,
  TOGGLE_TYPE: TYPES.TOGGLE_HIDDEN,
  stateName: 'accounts',
  propName: 'hiddens',
});

export default watchToggleHidden;
