const individual = (baseForm, raw) => {
  const form = Object.assign({}, baseForm, {
    first_name: raw.firstName,
    last_name: raw.lastName,
    nationality: raw.nationality,
    user_profile_attributes: {
      birthdate: new Date(raw.birthdate * 1000).toISOString(),
    },
  });
  // handle income
  // which is.. complex
  switch (raw.income) {
    case 'employed':
      form.user_profile_attributes.primary_source_income = 'employed';
      form.user_profile_attributes.job_title = raw.incomeJob;
      break;
    case 'self-employed':
      form.user_profile_attributes.primary_source_income = 'self_employed';
      form.user_profile_attributes.business_name = raw.incomeBusinessName;
      form.user_profile_attributes.business_type = raw.incomeBusinessType;
      break;
    case 'other':
      form.user_profile_attributes.primary_source_income = 'other';
      form.user_profile_attributes.other_source_income = raw.incomeDetail;
      break;
    case 'retired':
      form.user_profile_attributes.primary_source_income = 'retired';
      break;
    default:
  }
  return form;
};

const corporate = (baseForm, raw) => (
  Object.assign({}, baseForm, {
    user_profile_attributes: {
      business_type: raw.businessType,
      business_name: raw.businessName,
      business_website: raw.businessWebsite,
      tax_id: raw.taxId,
      vat_id: raw.vatId,
    },
  })
);

export default (raw) => {
  const baseForm = {
    user_type: raw.type, // 'corporate' or 'individual'
    // common
    email: raw.email,
    password: raw.password,
    country: raw.country,
    address: raw.address,
    affiliate_code: raw.affiliateCode,
  };
  const form = (
    raw.type === 'individual' ? individual : corporate
  )(baseForm, raw);
  return form;
};
