import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProductEditCard from './components/ProductEditCard';

const ProductEdit = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Product Edit</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <ProductEditCard />
    </Row>
  </Container>
);

export default ProductEdit;
