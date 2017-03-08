export default raw => ({
  id: raw.id,
  name: raw.name,
  email: raw.email,
  status: raw.status.replace(/_/g, '-'),
  // ===
  fees: raw.custom_fees,
  vendorId: raw.app_vendor_id,
  tfa: raw.phone_verified,
});
