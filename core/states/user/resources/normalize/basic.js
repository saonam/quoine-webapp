export default (raw) => ({
  id: raw.id,
  email: raw.email,
  since: raw.created_at,
  country: raw.country,
  // ===
  affiliateCode: raw.affiliate_code,
  fees: raw.custom_fees,
  tfa: !!raw.two_fa_type,
  tfaType: raw.two_fa_type || '',
  // ===
  status: raw.status.replace(/_/g, '-'),
  statusDeclinedReason: raw.declined_reason,
  // ==
  type: raw.user_type,
  // ==
  demo: raw.email.indexOf('@sandbox.quoine.com') !== -1,
});
