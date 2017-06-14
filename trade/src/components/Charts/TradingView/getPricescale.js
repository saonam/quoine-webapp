const getPricescale = (price) => {
  if (price <= 0) { return 1; }

  const precise = 4 - Math.ceil(Math.log10(price));
  const exponent = Math.max(precise, 2);
  const pricescale = 10 ** exponent;

  return pricescale;
};

export default getPricescale;
