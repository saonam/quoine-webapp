import { quoine } from '@quoine/resources';
import normalize from './normalize';

// eslint-disable-next-line import/prefer-default-export
export const load = () => (
  quoine.get('/vendor_configuration').then(normalize)
);
