import React from 'react';

import Layout from 'components/Layout';

import Product from 'components/DashboardMain/Product';
import Left from './Left';
import Center from './Center';

const DashboardMainGamma = () => (
  <Layout
    name="gamma"
    panels={[
      { Element: Left, title: 'left' },
      { Element: Center, title: 'center', auto: true },
      { Element: Product, title: 'right' },
    ]}
  />
);

export default DashboardMainGamma;

