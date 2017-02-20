import { quoine } from '@quoine/resources';
import * as normalize from './normalize';

const loadAll = ({ currency }, page) => (
  quoine.get(
    `/trades?funding_currency=${currency}&page=${page}`,
    { useCache: false }
  ).then(normalize.all)
);

const loadOpen = ({ currency }, page) => (
  quoine.get(
    `/trades?funding_currency=${currency}&status=open&page=${page}`,
    { useCache: false }
  ).then(normalize.all)
);

export default (payload, page) => (
  Promise.all([loadAll(payload, page), loadOpen(payload, page)])
  .then(responses => ({
    models: responses[0].models.concat(responses[1].models),
    page: responses[0].page,
  }))
);
