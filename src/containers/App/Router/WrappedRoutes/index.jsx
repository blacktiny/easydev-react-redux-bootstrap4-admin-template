import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import Commerce from './Commerce';
import Crypto from './Crypto';
import Documentation from './Documentation';
import DefaultPages from './DefaultPages';
import Account from './Account';
import ECommerce from './ECommerce';
import Maps from './Maps';
import Charts from './Charts';
import Tables from './Tables';
import Forms from './Forms';
import UI from './UI';

import Chat from '../../../Chat/index';
import Todo from '../../../Todo/index';

import FitnessDashboard from '../../../Dashboards/Fitness/index';
import DefaultDashboard from '../../../Dashboards/Default/index';
import MobileAppDashboard from '../../../Dashboards/MobileApp/index';
import BookingDashboard from '../../../Dashboards/Booking/index';

import Mail from '../../../Mail/index';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/dashboard_default" component={DefaultDashboard} />
      <Route path="/dashboard_e_commerce" component={Commerce} />
      <Route path="/dashboard_fitness" component={FitnessDashboard} />
      <Route path="/dashboard_crypto" component={Crypto} />
      <Route exact path="/dashboard_mobile_app" component={MobileAppDashboard} />
      <Route path="/dashboard_booking" component={BookingDashboard} />
      <Route path="/ui" component={UI} />
      <Route path="/mail" component={Mail} />
      <Route path="/chat" component={Chat} />
      <Route path="/todo" component={Todo} />
      <Route path="/forms" component={Forms} />
      <Route path="/tables" component={Tables} />
      <Route path="/charts" component={Charts} />
      <Route path="/maps" component={Maps} />
      <Route path="/account" component={Account} />
      <Route path="/e-commerce" component={ECommerce} />
      <Route path="/default_pages" component={DefaultPages} />
      <Route path="/documentation" component={Documentation} />
    </div>
  </div>
);
