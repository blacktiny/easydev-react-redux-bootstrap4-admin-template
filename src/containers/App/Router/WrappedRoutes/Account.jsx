import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Profile from '../../../Account/Profile/index';
import EmailConfirmation from '../../../Account/EmailConfimation/index';

export default () => (
  <Switch>
    <Route path="/account/profile" component={Profile} />
    <Route path="/account/email_confirmation" component={EmailConfirmation} />
  </Switch>
);
