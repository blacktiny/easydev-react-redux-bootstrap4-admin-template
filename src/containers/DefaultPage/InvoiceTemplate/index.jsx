import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Invoice from './components/InvoiceTemplate';

const InvoiceTemplate = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Invoice template</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <Invoice />
    </Row>
  </Container>
);

export default InvoiceTemplate;
