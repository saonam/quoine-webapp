import React from 'react';

import {
  Router as RouterRaw, Route, browserHistory, IndexRoute, Redirect,
} from 'react-router';

import AppFrame from '@quoine/components/AppFrame';

import SignInBody from 'components/SignIn';
import SignUpBody from 'components/SignUp';
import SignOutBody from 'components/SignOut';
import DemoBody from 'components/Demo';
import SettingsBody from 'components/Settings';

import Menu from 'components/Menu';

// Settings Body
import Application from 'components/Application';
import Profile from 'components/Profile';
import Security from 'components/Security';
import TokenManage from 'components/TokenManage';
import IpManage from 'components/IpManage';

const SignIn = { body: SignInBody, menu: Menu };
const SignUp = { body: SignUpBody, menu: Menu };
const SignOut = { body: SignOutBody, menu: Menu };
const Demo = { body: DemoBody, menu: Menu };
const Settings = { body: SettingsBody };

const Router = () => (
  <RouterRaw history={browserHistory} >
    <Route path="/" component={AppFrame}>

      <IndexRoute components={SignIn} />
      <Route path="/sign-in" components={SignIn} />
      <Route path="/sign-out" components={SignOut} />

      <Route path="/sign-up" components={SignUp} />
      <Route path="/demo" components={Demo} />

      <Route path="/settings" components={Settings}>
        <IndexRoute components={Application} />
        <Route path="application" components={Application} />
        <Route path="profile" components={Profile} />
        <Route path="security" components={Security} />
        {process.env.REACT_APP_VENDOR === 'quoine' || process.env.REACT_APP_VENDOR === 'qryptos' ? (
          <Route path="api" components={TokenManage} />
        ) : null}
        {process.env.REACT_APP_VENDOR === 'quoine' ? (
          <Route path="ip" components={IpManage} />
        ) : null}
      </Route>

      <Redirect from="*" to="/" />
    </Route>
  </RouterRaw>
);

// {process.env.REACT_APP_QUOINE_HOST.indexOf('sandbox') !== -1 ? (
//   <Route path="/demo" component={Demo} />
// ) : null}

export default Router;
