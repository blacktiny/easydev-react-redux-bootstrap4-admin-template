import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import PaymentForm from './PaymentForm';

const PaymentCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Payment</h5>
        </div>
        <div className="payment">
          <PaymentForm onSubmit />
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;
