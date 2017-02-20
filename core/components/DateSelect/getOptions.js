import translate from '@quoine/translate';

const yearOptions = [];
for (let i = new Date().getFullYear(); i >= 1900; i -= 1) {
  yearOptions.push({ label: `${i}`, value: `${i}` });
}
export const getYearOptions = () => yearOptions;

// month is a little bit more complex since it is string and need translation
export const getMonthOptions = () => {
  const monthOptions = [];
  for (let i = 12; i >= 1; i -= 1) {
    monthOptions.push({
      label: translate(`month:${i}`),
      value: `${i}`,
    });
  }
  return monthOptions;
};

const dateOptions = [];
for (let i = 31; i >= 1; i -= 1) {
  dateOptions.push({ label: `${i}`, value: `${i}` });
}
export const getDateOptions = () => dateOptions;
