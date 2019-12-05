import React from 'react';
import { Route, Switch } from 'react-router-dom';

import BasicTables from '../../../Tables/BasicTables/index';
import DataTable from '../../../Tables/DataTable/index';
import EditableTable from '../../../Tables/EditableTable/index';
import MaterialTable from '../../../Tables/MaterialTable/index';

export default () => (
  <Switch>
    <Route path="/tables/basic_tables" component={BasicTables} />
    <Route path="/tables/data_table" component={DataTable} />
    <Route path="/tables/editable_table" component={EditableTable} />
    <Route path="/tables/material_table" component={MaterialTable} />
  </Switch>
);
