import jpTerm from './Form/4/Jp/initialForm';

import pteIndi from './Form/3/Pte/Indi/initialForm';
import pteCorp from './Form/3/Pte/Corp/initialForm';
import jpIndi from './Form/3/Jp/Indi/initialForm';
import jpCorp from './Form/3/Jp/Corp/initialForm';

export default {
  email: '',
  password: '',
  referral: '',
  term: false,

  type: 'individual',
  country: '',
  countrySure: false,
  us: false,

  pteIndi,
  pteCorp,
  jpIndi,
  jpCorp,

  jpTerm,
};
