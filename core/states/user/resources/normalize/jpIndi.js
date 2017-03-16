import { getName, toTimeStamp } from './utils';

const jpIndiDetail = (raw) => ({
  ...getName(raw),
  gender: raw.gender,
  birth: toTimeStamp(raw.birthdate),
  // ===
  address: raw.address,
  phone: raw.phone,
  // ===
  occupation: raw.occupation,
  workAddress: raw.work_address,
  workPhone: raw.work_phone,
  // ===
  source: raw.income_source,
  income: raw.income_amount,
  permission: raw.invest_permission,
  investable: raw.investable_amount,
  purpose: raw.invest_purpose,
  experience: raw.experience,
  // ===
  relation: raw.relation,
});

const jpIndi = (raw) => ({
  type: raw.user_type,
  country: raw.country,
  // ===
  jpIndi: jpIndiDetail(raw.individual_info),
});

export default jpIndi;
