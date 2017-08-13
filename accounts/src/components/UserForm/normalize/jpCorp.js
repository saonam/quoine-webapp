import { getName, getValid, toDateString } from './utils';

const jpRep = (form) => ({
  user_info_type: 'representative',
  // ===
  title: form.title,
  // ===
  ...getName(form),
});

const jpSh = (form) => ({
  user_info_type: 'shareholder',
  // ===
  business_name: form.business,
  business_type: form.type,
  birthdate: toDateString(form.birth),
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
  birthdate: toDateString(form.birth),
  gender: form.gender,
  address: form.address,
  phone: form.phone,
  email: form.email,
  // ===
  ...getName(form),
  ...getValid(form),
});

const jpIndustry = (form) => ({
  industry_type: form.industry.type,
  industry_detail: form.industry.type === 'その他' ? form.industry.detail : '',
});

const jpCorpDetail = (form) => ({
  ...getValid(form),
  corporate_name: form.name,
  corporate_kana_name: form.nameKana,
  address: form.address,
  phone: form.phone,
  // ===
  ...jpIndustry(form),
  business: form.business,
  established_date: toDateString(form.established),
  annual_report_date: toDateString(form.report),
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
    phone: form.jpCorp.phone,
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
