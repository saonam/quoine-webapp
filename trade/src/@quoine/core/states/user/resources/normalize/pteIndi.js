const getDetail = (raw, key) => (
  (
    raw.user_profile && raw.user_profile[key]
  ) ? raw.user_profile[key] : ''
);

const pteIndi = (raw) => ({
  pteIndi: {
    name: {
      first: raw.first_name,
      last: raw.last_name,
    },
    nationality: raw.nationality,
    birth: getDetail(raw, 'birthdate') || 0,
    address: raw.address || '',
    income: getDetail(raw, 'other_source_income'),
    incomeJob: getDetail(raw, 'job_title'),
    incomeBusinessName: getDetail(raw, 'business_name'),
    incomeBusinessType: getDetail(raw, 'business_type'),
  },
});

export default pteIndi;
