import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import OrdersListTable from './components/OrdersListTable';

const OrdersList = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Orders List</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <OrdersListTable />
    </Row>
  </Container>
);

export default OrdersList;
