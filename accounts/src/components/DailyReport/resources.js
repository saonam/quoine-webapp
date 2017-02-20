import { quoine } from '@quoine/resources';

const load = () => (
  quoine.post('/users/check_status', { useCache: false })
  .then(raw => Boolean(raw.receive_report))
);

const set = (value) => (
  quoine.post('/users/stop_or_receive_report', {
    body: {
      receive_report: value,
    },
  })
);

export default { load, set };
