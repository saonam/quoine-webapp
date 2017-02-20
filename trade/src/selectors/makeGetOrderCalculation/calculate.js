import getCost from './getCost';
import getFee from './getFee';
import getInterestInFund from './getInterestInFund';
import getRate from './getRate';

const calculate = (form, orderBook, interestBook, fees, fxRates) => {
  if (form.market === 'futures') {
    return [];
  }

  // spot & margin here
  // first get est quote cost
  const costDetail = getCost({ form, orderBook });
  const cost = costDetail.taker + costDetail.maker;
  const avgPrice = cost / form.quantity;
  const fee = getFee({ form, costDetail, fees });

  // enough to return for spot
  const { quoteCurrency: quote } = form;
  if (form.market === 'spot') {
    return [
      { name: 'price-average', value: avgPrice, currency: quote },
      { name: 'fee', value: fee, currency: quote },
      { name: 'cost', value: cost + fee, currency: quote },
    ];
  }

  // now margin
  // rate from quote to fund
  const { account: fund } = form;
  const rate = getRate({ frm: quote, to: fund, fxRates, orderBook });
  const feeInFund = fee * rate;
  const costInFund = cost * rate;
  const margin = costInFund / form.leverage;
  // interest is calculated in quote or base
  // and already converted to fund there
  const interestInFund = getInterestInFund({
    cost, form, interestBook, fxRates, orderBook,
  });

  const result = [
    { name: 'price-average', value: avgPrice, currency: quote },
    { name: 'fee', value: feeInFund, currency: fund },
    { name: 'margin', value: margin, currency: fund },
    { name: 'interest', value: interestInFund, currency: fund },
  ];

  if (rate !== 1) {
    const isRateLarge = rate >= 0.01;
    result.push({
      name: 'fx-rate',
      info: {
        first: isRateLarge ? quote : fund,
        second: isRateLarge ? fund : quote,
      },
      value: isRateLarge ? rate : (1 / rate),
      currency: 'fxRate',
    });
  }

  return result;
};

export default calculate;
