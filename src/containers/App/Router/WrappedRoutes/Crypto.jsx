import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CryptoDashboard from '../../../Dashboards/Crypto/index';
import CryptoDashboardEdit from '../../../Dashboards/CryptoTableEdit/index';

export default () => (
  <Switch>
    <Route exact path="/dashboard_crypto" component={CryptoDashboard} />
    <Route path="/dashboard_crypto/edit/:index" component={CryptoDashboardEdit} />
  </Switch>
);
