const pteIndi = (raw) => ({
  pteIndi: {
    name: {
      first: raw.first_name,
      last: raw.last_name,
    },
    nationality: raw.nationality,
    birth: raw.user_profile.birthdate || 0,
    address: raw.address || '',
    income: raw.user_profile.other_source_income || '',
    incomeJob: raw.user_profile.job_title || '',
    incomeBusinessName: raw.user_profile.business_name || '',
    incomeBusinessType: raw.user_profile.business_type || '',
  },
});

export default pteIndi;
