import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import MatTable from './components/MatTable';

const MaterialTable = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Material Table</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <MatTable />
    </Row>
  </Container>
);

export default MaterialTable;
