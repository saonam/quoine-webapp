import jpTerm from './4/Jp/initialForm';

import pteIndi from './3/Pte/Indi/initialForm';
import pteCorp from './3/Pte/Corp/initialForm';
import jpIndi from './3/Jp/Indi/initialForm';
import jpCorp from './3/Jp/Corp/initialForm';

export default {
  email: '',
  password: '',
  referral: '',
  term: false,

  type: 'individual',
  country: '',
  countrySure: false,
  us: false,

  isQuoineJapan: false,

  pteIndi,
  pteCorp,
  jpIndi,
  jpCorp,

  jpTerm,
};
