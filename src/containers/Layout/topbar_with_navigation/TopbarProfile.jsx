import React, { PureComponent } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

export default class TopbarProfile extends PureComponent {
  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { collapse } = this.state;

    return (
      <div className="topbar__profile">
        <button className="topbar__avatar" type="button" onClick={this.toggle}>
          <img className="topbar__avatar-img" src={Ava} alt="avatar" />
          <p className="topbar__avatar-name">Roman Johanson</p>
          <DownIcon className="topbar__icon" />
        </button>
        {collapse && <button className="topbar__back" type="button" onClick={this.toggle} />}
        <Collapse isOpen={collapse} className="topbar__menu-wrap">
          <div className="topbar__menu">
            <TopbarMenuLink
              title="My Profile"
              icon="user"
              path="/account/profile"
              onClick={this.toggle}
            />
            <TopbarMenuLink
              title="Calendar"
              icon="calendar-full"
              path="/default_pages/calendar"
              onClick={this.toggle}
            />
            <TopbarMenuLink
              title="Tasks"
              icon="list"
              path="/todo"
              onClick={this.toggle}
            />
            <TopbarMenuLink
              title="Inbox"
              icon="inbox"
              path="/mail"
              onClick={this.toggle}
            />
            <div className="topbar__menu-divider" />
            <TopbarMenuLink
              title="Account Settings"
              icon="cog"
              path="/account/profile"
              onClick={this.toggle}
            />
            <TopbarMenuLink
              title="Lock Screen"
              icon="lock"
              path="/lock_screen"
              onClick={this.toggle}
            />
            <TopbarMenuLink
              title="Log Out"
              icon="exit"
              path="/log_in"
              onClick={this.toggle}
            />
          </div>
        </Collapse>
      </div>
    );
  }
}
