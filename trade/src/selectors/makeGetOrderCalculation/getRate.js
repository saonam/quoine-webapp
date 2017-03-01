const getRate = ({ frm, to, fxRates, orderBook, mid }) => {
  if (frm === to) { return 1; }

  const frmRate = fxRates[frm];
  const toRate = fxRates[to];
  if (frmRate && toRate) {
    return frmRate / toRate;
  }

  if (!orderBook.buys[0]) { return 1; }
  // rate frm => mid
  const rateFrmMid = orderBook.buys[0][0];

  if (!mid) { return rateFrmMid; }
  // rate mid => to
  const rateMidTo = fxRates[mid] / fxRates[to];
  // rate frm => to
  const rateFrmTo = rateFrmMid * rateMidTo;

  return rateFrmTo;
};

export default getRate;
