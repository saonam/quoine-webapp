import { getName, getValid, toDateString } from './utils';

const jpIndiDetail = (form) => ({
  ...getName(form),
  ...getValid(form),
  gender: form.gender,
  birthdate: toDateString(form.birth),
  // ===
  address: form.address,
  phone: form.phone,
  // ===
  occupation: form.occupation,
  work_address: form.workAddress,
  work_phone: form.workPhone,
  // ===
  income_source: form.source,
  income_amount: form.income,
  invest_permission: form.permission,
  investable_amount: form.investable,
  invest_purpose: form.purpose,
  experience: form.experience,
  // ===
  relation: form.relation,
});

const jpIndi = (form) => ({
  user_type: 'individual',
  // ===
  email: form.email,
  password: form.password,
  country: form.country,
  phone: form.jpIndi.phone,
  // ===
  individual_info_attributes: jpIndiDetail(form.jpIndi),
});

export default jpIndi;
