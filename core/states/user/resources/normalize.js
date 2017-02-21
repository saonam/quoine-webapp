export default raw => ({
  id: raw.id,
  name: raw.name,
  email: raw.email,
  // ===
  fees: raw.custom_fees,
});
