import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CartCard from './components/CartCard';

const Cart = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Cart</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <CartCard />
    </Row>
  </Container>
);

export default Cart;
