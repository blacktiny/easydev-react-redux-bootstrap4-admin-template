import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PaymentCard from './components/PaymentCard';

const Payment = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Payment</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <PaymentCard />
    </Row>
  </Container>
);

export default Payment;
