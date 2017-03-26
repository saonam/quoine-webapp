import name from '@quoine/components/NameInput/initialForm';

import address from '../AddressInput/initialForm';
import occupation from '../OccupationInput/initialForm';
import purpose from '../PurposeInput/initialForm';
import experience from '../ExperienceInput/initialForm';
import relation from '../RelationInput/initialForm';

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
