import { quoine } from '@quoine/resources';

const report = (frm, to) => (
  quoine.post('/accounts/send_report_from_to', {
    body: {
      from: frm === '' ? '' : new Date(frm * 1000).toISOString(),
      to: to === '' ? '' : new Date(to * 1000).toISOString(),
    },
  })
);

export default { report };
