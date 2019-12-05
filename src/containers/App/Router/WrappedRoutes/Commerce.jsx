import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ECommerceDashboard from '../../../Dashboards/ECommerce/index';
import ECommerceDashboardEdit from '../../../Dashboards/ECommerceTableEdit/index';

export default () => (
  <Switch>
    <Route exact path="/dashboard_e_commerce" component={ECommerceDashboard} />
    <Route path="/dashboard_e_commerce/edit/:index" component={ECommerceDashboardEdit} />
  </Switch>
);
