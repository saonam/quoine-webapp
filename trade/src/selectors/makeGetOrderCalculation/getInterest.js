import getFxRate from './getFxRate';

const calculateInterest = ({ loanAmount, book, vendorConfig }) => {
  const interestRate = vendorConfig.interestRate;
  if (interestRate) {
    return loanAmount * interestRate;
  }

  let leftQuantity = loanAmount;
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

// return interest in QUOTE
const getInterest = ({
  cost, form, interestBook, vendorConfig, fxRates, products,
}) => {
  // ready
  const isShort = form.side === 'sell';
  const loanAmount = isShort ? form.quantity : cost;
  const currency = isShort ? form.baseCurrency : form.quoteCurrency;
  const book = interestBook[currency];
  if (!book) { return 0; }

  // go
  const interest = calculateInterest({ vendorConfig, loanAmount, book });

  // convert BASE -> QUOTE
  if (isShort) {
    const fxRate = getFxRate({ frm: form.baseCurrency, to: form.quoteCurrency, fxRates, products });
    return interest * fxRate;
  }

  return interest;
};

export default getInterest;
