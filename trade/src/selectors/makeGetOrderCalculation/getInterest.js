import exchange from './exchange';

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
  cost, form, interestBook, vendorConfig, fxRates,
}) => {
  // ready
  const isShort = form.side === 'sell';
  const loanAmount = isShort ? form.quantity : cost;
  const currency = isShort ? form.baseCurrency : form.quoteCurrency;
  const book = interestBook[currency];
  if (!book) { return 0; }

  // go
  const interest = calculateInterest({ vendorConfig, loanAmount, book });

  // exchange BASE -> QUOTE
  if (isShort) {
    return exchange({
      value: interest, frm: form.baseCurrency, to: form.quoteCurrency, fxRates,
    });
  }

  return interest;
};

export default getInterest;
