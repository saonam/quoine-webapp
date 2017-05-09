import pteIndi from './pteIndi';
import pteCorp from './pteCorp';
import jpIndi from './jpIndi';
import jpCorp from './jpCorp';

import { sh } from './elements';

export { sh };

export default {
  email: '',
  password: '',
  referral: '',
  term: false,

  type: 'individual',
  country: '',
  countrySure: false,
  us: false,

  underJFSA: false,

  pteIndi,
  pteCorp,
  jpIndi,
  jpCorp,

  jpTerm: {
    first: false,
    second: false,
  },
};
