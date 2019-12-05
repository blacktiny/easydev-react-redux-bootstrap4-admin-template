import React from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {
  DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown,
} from 'reactstrap';
import TopbarNavLink from './TopbarNavLink';

const TopbarNavUIElements = () => (
  <UncontrolledDropdown className="topbar__nav-dropdown">
    <DropdownToggle className="topbar__nav-dropdown-toggle">
      UI elements<DownIcon />
    </DropdownToggle>
    <DropdownMenu className="topbar__nav-dropdown-menu dropdown__menu">
      <DropdownItem>
        <TopbarNavLink title="Alerts" route="/ui/alerts" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Buttons" route="/ui/buttons" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Carousel" route="/ui/carousel" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Collapse" route="/ui/collapse" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Grids" route="/ui/grids" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Modals" route="/ui/modals" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Notifications" route="/ui/notifications" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Panels" route="/ui/panels" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Progress Bars" route="/ui/progress_bars" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Range Sliders" route="/ui/range_sliders" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Tabs" route="/ui/tabs" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Timeline" route="/ui/timeline" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Tooltips & Popovers" route="/ui/tooltips" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Typography" route="/ui/typography" />
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default TopbarNavUIElements;
