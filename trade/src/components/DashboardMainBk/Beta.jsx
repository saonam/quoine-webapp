import React from 'react';

import translate from '@quoine/translate';

import Layout from 'components/Layout';

import BlottersRaw from './Blotters';
import Basic from './Basic';
import Product from './Product';
import Charts from './Charts';

const Blotters = () => <BlottersRaw horizontal />;

const DashboardMainBeta = () => (
  <Layout
    name="beta"
    panels={[
      { Element: Basic, title: translate('dashboard:basic') },
      { Element: Product, title: translate('dashboard:product') },
      {
        Element: Charts,
        title: translate('dashboard:chart'),
        transparent: true,
      },
      {
        Element: Blotters,
        title: translate('dashboard:blotter'),
        auto: true,
      },
    ]}
  />
);

export default DashboardMainBeta;

