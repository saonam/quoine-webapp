const getDetail = (raw, key) => (
  (
    raw.user_profile && raw.user_profile[key]
  ) ? raw.user_profile[key] : ''
);

const pteCorp = (raw) => ({
  pteCorp: {
    name: getDetail(raw, 'business_name'),
    type: getDetail(raw, 'business_type'),
    address: raw.address,
    website: getDetail(raw, 'business_website'),
    tax: getDetail(raw, 'tax_id'),
    vat: getDetail(raw, 'vat_id'),
  },
});

export default pteCorp;
