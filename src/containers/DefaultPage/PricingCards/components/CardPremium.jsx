import React from 'react';
import {
  Card, CardBody, Col, Button,
} from 'reactstrap';

const rocket = `${process.env.PUBLIC_URL}/img/pricing_cards/001-rocket.svg`;

const CardPremium = () => (
  <Col md={6} xl={3} sm={12}>
    <Card>
      <CardBody className="pricing-card pricing-card--danger">
        <div className="pricing-card__body">
          <img className="pricing-card__img" src={rocket} alt="" />
          <h3 className="pricing-card__plan">Premium</h3>
          <hr />
          <p className="pricing-card__price">$15<span>/mo</span></p>
          <p className="pricing-card__feature">Unlimited Users</p>
          <p className="pricing-card__feature">100 Tb storage</p>
          <p className="pricing-card__feature">Monthly update</p>
          <p className="pricing-card__feature">Free support</p>
          <Button className="pricing-card__button" color="primary">Sign Up</Button>
        </div>
      </CardBody>
    </Card>
  </Col>
);

export default CardPremium;
