import React from 'react';

import {
  Router as RouterRaw, Route, browserHistory, IndexRoute, Redirect,
} from 'react-router';

import AppFrame from '@quoine/components/AppFrame';

import SignInBody from 'components/SignIn';
import SignUpBody from 'components/SignUp';
import SignOutBody from 'components/SignOut';
import ForgotPasswordBody from 'components/ForgotPassword';
import ResetPasswordBody from 'components/ResetPassword';
import DemoBody from 'components/Demo';
import SettingsBody from 'components/Settings';

import Menu from 'components/Menu';

const SignIn = { body: SignInBody, menu: Menu };
const SignUp = { body: SignUpBody, menu: Menu };
const SignOut = { body: SignOutBody, menu: Menu };
const ForgotPassword = { body: ForgotPasswordBody, menu: Menu };
const ResetPassword = { body: ResetPasswordBody, menu: Menu };
const Demo = { body: DemoBody, menu: Menu };
const Settings = { body: SettingsBody };

const Router = () => (
  <RouterRaw history={browserHistory} >
    <Route path="/" component={AppFrame}>

      <IndexRoute components={SignIn} />
      <Route path="/sign-in" components={SignIn} />
      <Route path="/sign-out" components={SignOut} />
      <Route path="/forgot-password" components={ForgotPassword} />
      {/* TODO: get "token" as param instead of query */}
      <Route path="/reset-password" components={ResetPassword} />

      <Route path="/sign-up" components={SignUp} />
      <Route path="/demo" components={Demo} />

      <Route path="/settings/:tab" components={Settings} />

      <Redirect from="*" to="/" />
    </Route>
  </RouterRaw>
);

// {process.env.REACT_APP_QUOINE_HOST.indexOf('sandbox') !== -1 ? (
//   <Route path="/demo" component={Demo} />
// ) : null}

export default Router;
