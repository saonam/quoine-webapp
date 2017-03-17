export const getName = (prev) => ({
  first_kana_name: prev.nameKana.first,
  last_kana_name: prev.nameKana.last,
  first_kanji_name: prev.nameKanji.first,
  last_kanji_name: prev.nameKanji.last,
});

export const getValid = () => ({
  is_living_in_jp: true,
  is_us_citizen: false,
  is_pep: false,
});

export const toDateString = (date) => (
  new Date(date * 1000).toISOString()
);
