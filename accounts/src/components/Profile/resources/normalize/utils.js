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

export const toTimeStamp = (iso) => {
  const date = new Date(iso);
  return date.getTime();
};
