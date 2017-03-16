export default (raw) => ({
  id: raw.id,
  name: raw.name,
  firstName: raw.first_name,
  lastName: raw.last_name,
  email: raw.email,
  since: raw.created_at,
  affiliateCode: raw.affiliate_code,
  // ===
  fees: raw.custom_fees,
  tfa: raw.phone_verified,
  // ===
  status: raw.status.replace(/_/g, '-'),
  statusDeclinedReason: raw.declined_reason,
});
