import { quoine } from '@quoine/resources';

export const get = () => (
  quoine.get('/users/web_app_setting')
  .then(raw => JSON.parse(raw.web_app_setting))
);

export const set = settings => (
  quoine.put('/users/web_app_setting', {
    body: {
      web_app_setting: JSON.stringify(settings),
    },
  })
);
