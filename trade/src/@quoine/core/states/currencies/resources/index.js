import { quoine } from '@quoine/resources';
import * as normalize from './normalize';

export const loadAll = () => (
  quoine.get('/currencies').then(normalize.all)
);

export const loadFunding = () => (
  quoine.get('/currencies/funding_currencies').then(normalize.funding)
);
