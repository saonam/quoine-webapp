import { quoine } from '@quoine/resources';

import normalize from './normalize';

const signUp = form => (
  quoine.post('/users.json', {
    body: normalize(form),
    useCache: false,
  })
);

export default signUp;
