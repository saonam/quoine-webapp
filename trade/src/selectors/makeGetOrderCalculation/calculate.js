import getCost from './getCost';
import getFee from './getFee';
import getInterest from './getInterest';
import getFxRate from './getFxRate';

const calculate = (form, orderBook, interestBook, vendorConfig, fees, fxRates, products) => {
  if (form.market === 'futures') {
    return [];
  }

  // fxRate from quote to fund
  const { quoteCurrency: quote } = form;
  const { account: fund } = form;
  const fxRate = getFxRate({ frm: quote, to: fund, fxRates, products });

  // spot & margin here
  // first get est quote cost
  const costDetail = getCost({ form, orderBook });
  const cost = costDetail.taker + costDetail.maker;
  const avgPrice = cost / form.quantity;
  const fee = getFee({ form, costDetail, fees });

  // enough to return for spot
  if (form.market === 'spot') {
    return [
      { name: 'price-average', value: avgPrice, currency: quote },
      { name: 'fee', value: fee, currency: quote },
      { name: 'cost', value: cost + fee, currency: quote },
    ];
  }

  // now margin
  const feeInFund = fee * fxRate;
  const costInFund = cost * fxRate;
  let margin = costInFund / form.leverage;
  // TODO
  // check is crypto account by selector
  if (form.account === 'BTC') {
    margin *= 2;
  }
  // interest is calculated in QUOTE
  const interest = getInterest({
    cost, form, interestBook, vendorConfig, fxRates, products,
  });
  const interestInFund = interest * fxRate;

  const result = [
    { name: 'price-average', value: avgPrice, currency: quote },
    { name: 'fee', value: feeInFund, currency: fund },
    { name: 'margin', value: margin, currency: fund },
    { name: 'interest', value: interestInFund, currency: fund },
  ];

  if (fxRate !== 1) {
    const isFxRateLarge = fxRate >= 0.01;
    result.push({
      name: 'fx-rate',
      info: {
        first: isFxRateLarge ? quote : fund,
        second: isFxRateLarge ? fund : quote,
      },
      value: isFxRateLarge ? fxRate : (1 / fxRate),
      currency: 'fxRate',
    });
  }

  return result;
};

export default calculate;
