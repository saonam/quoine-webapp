export default (raw) => ({
  id: raw.id,
  email: raw.email,
  since: raw.created_at,
  country: raw.country,
  // ===
  affiliateCode: raw.affiliate_code,
  fees: raw.custom_fees,
  tfa: raw.phone_verified,
  // ===
  status: raw.status.replace(/_/g, '-'),
  statusDeclinedReason: raw.declined_reason,
  // ==
  type: raw.user_type,
});
