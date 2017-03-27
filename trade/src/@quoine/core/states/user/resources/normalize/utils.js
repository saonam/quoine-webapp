export const getName = (raw) => ({
  nameKana: {
    first: raw.first_kana_name,
    last: raw.last_kana_name,
  },
  nameKanji: {
    first: raw.first_kanji_name,
    last: raw.last_kanji_name,
  },
});

export const getValid = () => ({
  jp: true,
  us: true,
  pep: true,
});

const stringToBoolean = (str) => (str === 'true');

export const getPurpose = (raw) => ({
  exchange: stringToBoolean(raw.exchange),
  trade: stringToBoolean(raw.trade),
  diversify: stringToBoolean(raw.diversify),
  invest: stringToBoolean(raw.invest),
});
