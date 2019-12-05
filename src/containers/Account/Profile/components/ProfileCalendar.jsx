import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Calendar from '../../../../shared/components/Calendar';
import events from '../../../DefaultPage/Calendar/components/events';

const ProfileCalendar = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody className="profile__card--calendar">
        <Calendar events={events} small />
      </CardBody>
    </Card>
  </Col>
);

export default ProfileCalendar;
