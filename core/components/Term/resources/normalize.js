const normalize = (raw) => {
  const all = raw.map(item => ({
    type: item.term_type,
    url: item.term_document_url,
    version: item.term_version,
  }));
  const eStatement = all.find(item => item.type === 'e-statement');
  const terms = all.filter(item => item.type !== 'e-statement');
  return { eStatement, terms };
};

export default normalize;
