import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Introduction from '../../../Documentation/01_introduction/index';
import Installation from '../../../Documentation/02_installation/index';
import FileStructure from '../../../Documentation/03_files_structure/index';
import Components from '../../../Documentation/04_components/index';
import Form from '../../../Documentation/05_forms/index';
import ColorThemes from '../../../Documentation/06_change_and_add_color_themes/index';
import NavigationItem from '../../../Documentation/07_new_navigation_item/index';
import Authentication from '../../../Documentation/08_authentication/index';
import Resources from '../../../Documentation/09_resources/index';
import Changelog from '../../../Documentation/10_changelog/index';

export default () => (
  <Switch>
    <Route path="/documentation/introduction" component={Introduction} />
    <Route path="/documentation/installation" component={Installation} />
    <Route path="/documentation/file_structure" component={FileStructure} />
    <Route path="/documentation/components" component={Components} />
    <Route path="/documentation/form" component={Form} />
    <Route path="/documentation/color_themes" component={ColorThemes} />
    <Route path="/documentation/navigation_item" component={NavigationItem} />
    <Route path="/documentation/authentication" component={Authentication} />
    <Route path="/documentation/resources" component={Resources} />
    <Route path="/documentation/changelog" component={Changelog} />
  </Switch>
);
