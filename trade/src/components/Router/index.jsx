import React from 'react';

import {
  Router as RouterRaw, Route, browserHistory, IndexRoute, Redirect,
} from 'react-router';

import AppFrame from '@quoine/components/AppFrame';

import DashboardBody from 'components/DashboardBody';
import DashboardMenu from 'components/DashboardMenu';

const Dashboard = { body: DashboardBody, menu: DashboardMenu };

const Router = () => (
  <RouterRaw history={browserHistory} >
    <Route path="/" component={AppFrame} >
      <IndexRoute components={Dashboard} />
      <Redirect from="*" to="/" />
    </Route>
  </RouterRaw>
);

export default Router;
