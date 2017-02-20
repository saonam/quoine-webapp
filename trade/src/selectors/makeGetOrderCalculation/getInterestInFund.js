import getRate from './getRate';

const getInterest = ({ quantity, book }) => {
  let leftQuantity = quantity;
  let interest = 0;

  const length = book.length;
  for (let i = 0; i < length; i += 1) {
    if (leftQuantity <= 0) { break; }
    const [offerRate, offerQuantity] = book[i];
    interest += Math.min(offerQuantity, leftQuantity) * offerRate;
    leftQuantity -= offerQuantity;
  }

  return interest;
};

const getInterestInFund = ({
  cost, form, interestBook, fxRates, orderBook,
}) => {
  // ready
  const isSell = form.side === 'sell';
  const quantity = isSell ? form.quantity : cost;
  const currency = isSell ? form.baseCurrency : form.quoteCurrency;
  const book = interestBook[currency];
  if (!book) { return 0; }

  // go
  const interest = getInterest({ quantity, book });

  // convert
  const fund = form.account;
  const rate = getRate({ frm: currency, to: fund, fxRates, orderBook });
  const interestInFund = interest * rate;

  return interestInFund;
};

export default getInterestInFund;
