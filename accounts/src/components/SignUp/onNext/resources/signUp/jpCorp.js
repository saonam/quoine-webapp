import { getName, getValid } from './utils';

const jpRep = (form) => ({
  user_info_type: 'representative',
  // ===
  title: form.title,
  // ===
  ...getName(form),
  ...getValid(form),
});

const jpSh = (form) => ({
  user_info_type: 'shareholder',
  // ===
  business_name: form.business,
  business_type: form.type,
  birthdate: form.birth,
  address: form.address,
  // ===
  ...getName(form),
  ...getValid(form),
});

const jpTrader = (form) => ({
  user_info_type: 'trader',
  // ===
  same_as_rep: form.sameAsRep,
  position: form.position,
  department: form.department,
  // ===
  gender: form.gender,
  address: form.address,
  phone: form.phone,
  email: form.email,
  // ===
  ...getName(form),
});

const jpCorpDetail = (form) => ({
  corporate_name: form.name,
  corporate_kana_name: form.nameKana,
  address: form.address,
  phone: form.phone,
  // ===
  industry_type: form.industry,
  business: form.business,
  established_date: new Date(form.established * 1000).toISOString(),
  annual_report_date: new Date(form.report * 1000).toISOString(),
  website: form.website,
  // ===
  income_gross: form.incomeGross,
  income_net: form.incomeNet,
  capital: form.capital,
  invest_purpose: form.purpose,
  experience: form.experience,
  // ===
  relation: form.relation,
});

const jpCorp = (form) => {
  // basic
  const result = {
    user_type: 'corporate',
    // ===
    email: form.email,
    password: form.password,
    country: form.country,
    // ===
    corporation_info_attributes: jpCorpDetail(form.jpCorp),
  };
  const users = [];
  users.push(jpRep(form.jpCorp.rep));
  users.push(jpTrader(form.jpCorp.trader));
  form.jpCorp.shs.forEach(sh => {
    users.push(jpSh(sh));
  });
  // done
  result
    .corporation_info_attributes
    .corporation_user_infos_attributes = users;
  return result;
};

export default jpCorp;
