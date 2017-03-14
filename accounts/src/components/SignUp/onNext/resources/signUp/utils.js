export const getName = (prev) => ({
  first_kana_name: prev.nameKana.first,
  last_kana_name: prev.nameKana.last,
  first_kanji_name: prev.nameKanji.first,
  last_kanji_name: prev.nameKanji.last,
});

export const getValid = (prev) => ({
  is_living_in_jp: prev.jp,
  is_us_citizen: prev.us,
  is_pep: prev.pep,
});
