import { getName, getPurpose } from './utils';

const jpIndiDetail = (raw) => ({
  ...getName(raw),
  gender: raw.gender,
  birth: raw.birthdate || 0,
  // ===
  pep: true,
  // ===
  address: raw.address,
  phone: raw.phone || '',
  // ===
  occupation: raw.occupation,
  workAddress: raw.work_address,
  workPhone: raw.work_phone,
  // ===
  source: raw.income_source,
  income: raw.income_amount,
  permission: raw.invest_permission,
  investable: raw.investable_amount,
  purpose: getPurpose(raw.invest_purpose),
  experience: raw.experience,
  // ===
  relation: raw.relation,
});

const jpIndi = (raw) => ({
  type: raw.user_type,
  country: raw.country,
  // ===
  jpIndi: raw.individual_info ? jpIndiDetail(raw.individual_info) : {},
});

export default jpIndi;
