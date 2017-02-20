const getFee = ({ form, costDetail, fees }) => {
  const fee = fees[form.product];
  if (!fee) { return 0; }
  const taker = costDetail.taker * fee.taker;
  const maker = costDetail.maker * fee.maker;
  return taker + maker;
};

export default getFee;
