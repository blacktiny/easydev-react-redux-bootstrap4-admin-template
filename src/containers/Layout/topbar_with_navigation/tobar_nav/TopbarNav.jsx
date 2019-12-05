import React from 'react';
import { Link } from 'react-router-dom';
import TopbarNavDashboards from './TopbarNavDashboards';
import TopbarNavUIElements from './TopbarNavUIElements';
import TopbarNavOtherPages from './TopbarNavOtherPages';

const TopbarNav = () => (
  <nav className="topbar__nav">
    <TopbarNavDashboards />
    <TopbarNavUIElements />
    <TopbarNavOtherPages />
    <Link className="topbar__nav-link" to="/documentation/introduction">Documentation</Link>
  </nav>
);

export default TopbarNav;
