const checkIsQuoineJapan = (vendorId) => (
  process.env.REACT_APP_VENDOR === 'quoine' &&
  Number(vendorId) === Number(process.env.REACT_APP_QUOINEJP_ID)
);

export default raw => ({
  id: raw.id,
  name: raw.name,
  email: raw.email,
  status: raw.status.replace(/_/g, '-'),
  // ===
  fees: raw.custom_fees,
  tfa: raw.phone_verified,
  isQuoineJapan: checkIsQuoineJapan(raw.app_vendor_id),
});
