import { quoine } from '@quoine/resources';

const load = () => (
  quoine
    .get('/countries.json')
    .then(data => data.countries.map(
      country => ({
        name: country.name,
        iso: country.iso_code,
      })
    ))
);

export default { load };
