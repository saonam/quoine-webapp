import { quoine } from '@quoine/resources';
import normalize from './normalize';

const loadAll = ({ currency }, page) => (
  quoine.get(
    `/orders?funding_currency=${currency}&page=${page}`,
    { useCache: false }
  ).then(normalize.all)
);

const loadLive = ({ currency }, page) => (
  quoine.get(
    `/orders?funding_currency=${currency}&status=live&page=${page}`,
    { useCache: false }
  ).then(normalize.all)
);

export default (payload, page) => (
  Promise.all([loadAll(payload, page), loadLive(payload, page)])
  .then(responses => ({
    models: responses[0].models.concat(responses[1].models),
    page: responses[0].page,
  }))
);
