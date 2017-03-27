const safeFormatMoney = (new Intl.NumberFormat('en', {
  style: 'decimal',
  minimumFractionDigits: 8,
  maximumFractionDigits: 8,
  useGrouping: false,
})).format;

export default safeFormatMoney;
