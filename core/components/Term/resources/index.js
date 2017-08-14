import { quoine } from '@quoine/resources';
import normalize from './normalize';

const loadNewOnly = () => (
  Promise.all([
    quoine.post('/users/check_status', { useCache: true }),
    quoine.get('/current_privacy_policy'),
  ]).then(response => {
    const [userRaw, documentsRaw] = response;
    
    const latestTermVersion = userRaw.latest_term_version ? Number(userRaw.latest_term_version) : 1;
    const documents = normalize(documentsRaw);

    return {
      eStatement: documents.eStatement.version !== latestTermVersion ? documents.eStatement : null,
      terms: documents.terms.filter(item => item.version !== latestTermVersion),
    };
  })
);

const loadFull = () => (
  quoine
    .get('/current_privacy_policy')
    .then(normalize)
    .then(documents => ({
      eStatement: documents.eStatement,
      terms: documents.terms,
    }))
);

const load = (newOnly) => (
  newOnly ? loadNewOnly() : loadFull()
);

const update = () => (
  quoine.post('/users/set_latest_term_version', {
    errorPrefix: 'term',
  })
);

export default { load, update };
