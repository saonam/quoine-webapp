import name from '@quoine/components/NameInput/initialForm';

import address from '../AddressSelect/initialForm';
import occupation from '../OccupationSelect/initialForm';
import purpose from '../PurposeSelect/initialForm';
import experience from '../ExperienceSelect/initialForm';
import relation from '../RelationSelect/initialForm';

export default {
  nameKanji: name,
  nameKana: name,
  birth: 0,
  gender: '',
  pep: false,
  // ===
  address,
  phone: '',
  // ===
  occupation,
  workAddress: address,
  workPhone: '',
  // ===
  source: '',
  income: '',
  permission: false,
  investable: '',
  purpose,
  experience,
  // ===
  relation,
};
