const pteCorp = (form) => ({
  user_type: 'corporate',
  // ===
  email: form.email,
  password: form.password,
  country: form.country,
  affiliate_code: form.referral,
  // ===
  address: form.pteCorp.address,
  // ===
  user_profile_attributes: {
    business_name: form.pteCorp.name,
    business_type: form.pteCorp.type,
    business_website: form.pteCorp.website,
    vat_id: form.pteCorp.vat,
    tax_id: form.pteCorp.tax,
  },
});

export default pteCorp;
