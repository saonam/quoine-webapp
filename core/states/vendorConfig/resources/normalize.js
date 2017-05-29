export default (raw) => {
  const config = raw || {};
  return ({
    id: config.id,
    interestRate: config.interest_rate,
  });
};
