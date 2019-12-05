import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProfileMain from './components/ProfileMain';
import ProfileCalendar from './components/ProfileCalendar';
import ProfileTasks from './components/ProfileTasks';
import ProfileTabs from './components/ProfileTabs';

const Calendar = () => (
  <Container>
    <div className="profile">
      <Row>
        <Col md={12} lg={12} xl={4}>
          <Row>
            <ProfileMain />
            <ProfileCalendar />
            <ProfileTasks />
          </Row>
        </Col>
        <ProfileTabs />
      </Row>
    </div>
  </Container>
);

export default Calendar;
