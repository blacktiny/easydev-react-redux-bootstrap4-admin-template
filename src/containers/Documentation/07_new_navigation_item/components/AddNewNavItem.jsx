import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const AddNewNavItem = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Add New Navigation Item</h5>
      </div>
      <p>The template uses <a href="https://github.com/ReactTraining/react-router">react-router</a> for navigation.
            Add a new Route in <b>template/src/app/Router.js</b> to add new navigation item:
      </p>
      <CodeHighlither>
        {'<Route path=\'/path_to_page\' component={Page}/>'}
      </CodeHighlither>
      <p>Then add new SidebarLink in <b>template/src/pages/_layout/sidebar/SidebarContent.js</b></p>
      <CodeHighlither>
        {`<SidebarLink title='Page' route='/path_to_page' onClick={this.hideSidebar}/>
//also you can add icon`}
      </CodeHighlither>
      <p>Or add TopbarNavLink in <b>template/src/pages/_layout/topbar_with_navigation/topbar_nav</b> and
            SidebarLink in <b>template/src/pages/_layout/topbar_with_navigation/sidebar_mobile/SidebarContent.js</b>
            if you want use Top Menu
      </p>
      <CodeHighlither>
        {'<TopbarNavLink title=\'Page\' icon=\'store\' route=\'/path_to_page\'/>'}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default AddNewNavItem;
