import React from 'react';

import {
  Router as RouterRaw, Route, browserHistory, IndexRoute,
} from 'react-router';

import AppFrame from '@quoine/components/AppFrame';

import DashboardBody from 'components/DashboardBody';
import DashboardMenu from 'components/DashboardMenu';
import AccountsBody from 'components/AccountsBody';

const Dashboard = { body: DashboardBody, menu: DashboardMenu };
const Accounts = { body: AccountsBody, menu: null };

const Router = () => (
  <RouterRaw history={browserHistory} >
    <Route path="/" component={AppFrame} >
      <IndexRoute components={Dashboard} />
      <Route path="/accounts" components={Accounts} />
      <Redirect from="*" to="/" />
    </Route>
  </RouterRaw>
);

export default Router;
