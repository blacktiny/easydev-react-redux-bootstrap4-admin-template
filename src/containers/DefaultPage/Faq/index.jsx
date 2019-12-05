import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import FAQs from './components/FAQs';

const FAQ = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">FAQs</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <FAQs />
    </Row>
  </Container>
);

export default FAQ;
