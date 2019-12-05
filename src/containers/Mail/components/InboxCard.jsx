import React from 'react';
import { Card, Col, CardBody } from 'reactstrap';
import Inbox from './Inbox';
import emails from './email-list';

const InboxCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <Inbox emails={emails} />
      </CardBody>
    </Card>
  </Col>
);

export default InboxCard;
