import React from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {
  DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown,
} from 'reactstrap';
import TopbarNavLink from './TopbarNavLink';

const TopbarNavDashboards = () => (
  <UncontrolledDropdown className="topbar__nav-dropdown">
    <DropdownToggle className="topbar__nav-dropdown-toggle">
      Dashboards <DownIcon />
    </DropdownToggle>
    <DropdownMenu className="topbar__nav-dropdown-menu dropdown__menu">
      <DropdownItem>
        <TopbarNavLink title="Dashboard Default" icon="home" route="/dashboard_default" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Dashboard E-commerce" icon="store" route="/dashboard_e_commerce" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Dashboard Fitness" icon="heart-pulse" route="/dashboard_fitness" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Dashboard Crypto" icon="rocket" route="/dashboard_crypto" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Dashboard Booking" icon="apartment" newLink route="/dashboard_booking" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Dashboard MobileApp" icon="smartphone" newLink route="/dashboard_mobile_app" />
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);


export default TopbarNavDashboards;
