import infos from './infos';

const trailingZeroRegex = /0+$/;
const split = (value) => {
  const zeros = value.match(trailingZeroRegex);
  const length = zeros ? zeros[0].length : 0;
  if (length === 0) {
    return [value];
  }
  return [
    value.slice(0, -length),
    value.slice(-length),
  ];
};

export default (value, currency, noSymbol) => {
  if (!isFinite(value)) { return ['']; }
  const info = infos[currency];
  const formatted = info.format(value);
  const withSymbol = noSymbol ? formatted : `${info.symbol}${formatted}`;
  // always return array
  const result = info.split ? split(withSymbol) : [withSymbol];
  return result;
};
