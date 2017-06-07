import { quoine } from '@quoine/resources';

const load = () => (
  quoine.post('/ga')
  .then(response => ({
    gaKey: response.key,
    qrCode: response.qr_code_url,
  }))
);

export default { load };
