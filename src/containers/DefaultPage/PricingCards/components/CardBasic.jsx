import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';

const paperPlane = `${process.env.PUBLIC_URL}/img/pricing_cards/004-paper-plane.svg`;

const CardBasic = () => (
  <Col md={6} xl={3} sm={12}>
    <Card>
      <CardBody className="pricing-card pricing-card--primary">
        <div className="pricing-card__body">
          <img className="pricing-card__img" src={paperPlane} alt="" />
          <h3 className="pricing-card__plan">Basic</h3>
          <hr />
          <p className="pricing-card__price">$0<span>/mo</span></p>
          <p className="pricing-card__feature">2 Users</p>
          <p className="pricing-card__feature">500 Gb storage</p>
          <p className="pricing-card__feature pricing-card__feature--inactive">Monthly update</p>
          <p className="pricing-card__feature pricing-card__feature--inactive">Free support</p>
          <Button className="pricing-card__button" color="primary">Sign Up</Button>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default CardBasic;
