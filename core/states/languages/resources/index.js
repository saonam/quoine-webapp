import { quoine } from '@quoine/resources';

// eslint-disable-next-line import/prefer-default-export
export const set = language => (
  quoine.get(`/users/select_language?lang=${language}`, {
    useCache: false,
  })
);
