const timeFormat = {
  hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit',
};
const dateFormat = {
  month: 'short', day: '2-digit',
};
const dateWithYearFormat = {
  month: 'short', day: '2-digit', year: 'numeric',
};
const fullFormat = { ...timeFormat, ...dateFormat };
const fullWithYearFormat = { ...timeFormat, ...dateWithYearFormat };

// ===

const time = new Intl.DateTimeFormat('en', timeFormat).format;
const date = new Intl.DateTimeFormat('en', dateFormat).format;
const dateWithYear = new Intl.DateTimeFormat('en', dateWithYearFormat).format;
const full = new Intl.DateTimeFormat('en', fullFormat).format;
const fullWithYear = new Intl.DateTimeFormat('en', fullWithYearFormat).format;

export default { time, date, dateWithYear, full, fullWithYear };
