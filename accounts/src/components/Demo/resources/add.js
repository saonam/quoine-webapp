import { quoine } from '@quoine/resources';

import normalize from 'components/SignIn/resources/normalize';

const add = email => (
  quoine.post('/sandbox/demo_user', {
    body: { email },
  }).then(normalize)
);

export default add;
