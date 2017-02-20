export default (raw) => ({
  id: raw.id,
  since: raw.created_at,
  firstName: raw.first_name,
  lastName: raw.last_name,
  email: raw.email,
  affiliateCode: raw.affiliate_code,
  // ===
  status: raw.status,
  statusDeclinedReason: raw.declined_reason,
});
