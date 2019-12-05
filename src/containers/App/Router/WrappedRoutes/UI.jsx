import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Alerts from '../../../UI/Alerts/index';
import Buttons from '../../../UI/Buttons/index';
import Carousel from '../../../UI/Carousel/index';
import Collapse from '../../../UI/Collapse/index';
import Grids from '../../../UI/Grids';
import Modals from '../../../UI/Modals/index';
import Notifications from '../../../UI/Notification/index';
import Panels from '../../../UI/Panels/index';
import ProgressBars from '../../../UI/ProgressBars/index';
import RangeSliders from '../../../UI/RangeSliders/index';
import Tabs from '../../../UI/Tabs/index';
import Timeline from '../../../UI/Timeline/index';
import Tooltips from '../../../UI/Tooltips/index';
import Typography from '../../../UI/Typography/index';

export default () => (
  <Switch>
    <Route path="/ui/alerts" component={Alerts} />
    <Route path="/ui/buttons" component={Buttons} />
    <Route path="/ui/carousel" component={Carousel} />
    <Route path="/ui/collapse" component={Collapse} />
    <Route path="/ui/grids" component={Grids} />
    <Route path="/ui/modals" component={Modals} />
    <Route path="/ui/notifications" component={Notifications} />
    <Route path="/ui/panels" component={Panels} />
    <Route path="/ui/progress_bars" component={ProgressBars} />
    <Route path="/ui/range_sliders" component={RangeSliders} />
    <Route path="/ui/tabs" component={Tabs} />
    <Route path="/ui/timeline" component={Timeline} />
    <Route path="/ui/tooltips" component={Tooltips} />
    <Route path="/ui/typography" component={Typography} />
  </Switch>
);
