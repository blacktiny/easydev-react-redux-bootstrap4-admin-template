import React, { PureComponent } from 'react';
import {
  Card, Col, Nav, NavItem, NavLink, TabContent, TabPane,
} from 'reactstrap';
import classnames from 'classnames';
import ProfileTimeLine from './ProfileTimeLine';
import ProfileActivities from './ProfileActivities';
import showResults from './Show';
import ProfileSettings from './ProfileSettings';

export default class ProfileTabs extends PureComponent {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const initialValues = {
      username: 'Larry Boom',
      email: 'boom@mail.com',
    };

    const { activeTab } = this.state;
    return (
      <Col md={12} lg={12} xl={8}>
        <Card>
          <div className="profile__card tabs tabs--bordered-bottom">
            <div className="tabs__wrap">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => {
                      this.toggle('1');
                    }}
                  >
                    Activity
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => {
                      this.toggle('2');
                    }}
                  >
                    TimeLine
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === '3' })}
                    onClick={() => {
                      this.toggle('3');
                    }}
                  >
                    Settings
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <ProfileActivities />
                </TabPane>
                <TabPane tabId="2">
                  <ProfileTimeLine />
                </TabPane>
                <TabPane tabId="3">
                  <ProfileSettings onSubmit={showResults} initialValues={initialValues} />
                </TabPane>
              </TabContent>
            </div>
          </div>
        </Card>
      </Col>
    );
  }
}
