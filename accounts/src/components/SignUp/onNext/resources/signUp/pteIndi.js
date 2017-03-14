const pteIndi = (form) => ({
  user_type: 'individual',
  // ===
  email: form.email,
  password: form.password,
  country: form.country,
  affiliate_code: form.referral,
  // ===
  nationality: form.pteIndi.nationality,
  address: form.pteIndi.address,
  first_name: form.pteIndi.name.first,
  last_name: form.pteIndi.name.last,
  // ===
  user_profile_attributes: {
    birthdate: new Date(form.pteIndi.birth * 1000).toISOString(),
    primary_source_income: form.pteIndi.income,
    job_title: form.pteIndi.incomeJob,
    other_source_income: form.pteIndi.incomeDetail,
    business_name: form.pteIndi.incomeBusinessName,
    business_type: form.pteIndi.incomeBusinessType,
  },
});

export default pteIndi;
