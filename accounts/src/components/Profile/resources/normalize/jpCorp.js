import { getName, toTimeStamp } from './utils';

const jpRep = (raw) => ({
  title: raw.title,
  // ===
  ...getName(raw),
});

const jpSh = (raw) => ({
  business: raw.business_name,
  type: raw.business_type,
  birth: raw.birthdate,
  address: raw.address,
  // ===
  ...getName(raw),
});

const jpTrader = (raw) => ({
  sameAsRep: raw.same_as_rep,
  position: raw.position,
  department: raw.department,
  // ===
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
    industry: raw.industry_type,
    business: raw.business,
    established: toTimeStamp(raw.established_date),
    report: toTimeStamp(raw.annual_report_date),
    website: raw.website,
    // ===
    incomeGross: raw.income_gross,
    incomeNet: raw.income_net,
    capital: raw.capital,
    purpose: raw.invest_purpose,
    experience: raw.experience,
    // ===
    relation: raw.relation,
  };

  const rep = findUserInfo(raw, 'representative');
  const shs = findUserInfo(raw, 'shareholder');
  const trader = findUserInfo(raw, 'trader');

  result.rep = jpRep(rep);
  result.shs = shs ? shs.map(jpSh) : [];
  result.trader = jpTrader(trader);

  return result;
};

const jpCorp = (raw) => ({
  type: raw.user_type,
  country: raw.country,
  // ===
  jpCorp: jpCorpDetail(raw.corporation_info),
});

export default jpCorp;
