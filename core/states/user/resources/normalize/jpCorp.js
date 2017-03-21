import { getName, getValid, getPurpose } from './utils';

const jpRep = (raw) => ({
  title: raw.title,
  // ===
  ...getName(raw),
  ...getValid(raw),
});

const jpSh = (raw) => ({
  business: raw.business_name,
  type: raw.business_type,
  birth: raw.birthdate || 0,
  address: raw.address,
  // ===
  ...getName(raw),
  ...getValid(raw),
});

const jpTrader = (raw) => ({
  sameAsRep: raw.same_as_rep || 'no',
  position: raw.position,
  department: raw.department,
  // ===
  birth: raw.birthdate || 0,
  gender: raw.gender,
  address: raw.address,
  phone: raw.phone,
  email: raw.email,
  // ===
  ...getName(raw),
});

const findUserInfo = (raw, type) => (
  raw.corporation_user_infos.find(item => item.user_info_type === type)
);

const jpCorpDetail = (raw) => {
  const result = {
    name: raw.corporate_name,
    nameKana: raw.corporate_kana_name,
    address: raw.address,
    phone: raw.phone,
    // ===
    industry: {
      type: raw.industry_type,
      detail: raw.industry_detail || '',
    },
    business: raw.business || '',
    established: raw.established_date || 0,
    report: raw.annual_report_date || 0,
    website: raw.website,
    // ===
    incomeGross: raw.income_gross,
    incomeNet: raw.income_net,
    capital: raw.capital,
    purpose: getPurpose(raw.invest_purpose),
    experience: raw.experience,
    // ===
    relation: raw.relation,
  };

  const rep = findUserInfo(raw, 'representative');
  const trader = findUserInfo(raw, 'trader');

  result.rep = jpRep(rep);
  result.trader = jpTrader(trader);

  const shs = raw.corporation_user_infos.filter(
    item => item.user_info_type === 'shareholder'
  );
  result.shs = shs.map(jpSh);

  return result;
};

const jpCorp = (raw) => ({
  type: raw.user_type,
  country: raw.country,
  // ===
  jpCorp: jpCorpDetail(raw.corporation_info),
});

export default jpCorp;
