import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardBasic from './components/CardBasic';
import CardSpecial from './components/CardSpecial';
import CardPro from './components/CardPro';
import CardPremium from './components/CardPremium';

const PricingCards = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Pricing Cards</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row dir="ltr">
      <CardBasic />
      <CardSpecial />
      <CardPro />
      <CardPremium />
    </Row>
  </Container>
);

export default PricingCards;
