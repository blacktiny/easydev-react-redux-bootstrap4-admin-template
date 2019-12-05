import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProductCard from './components/ProductCard';
import RelatedItems from './components/RelatedItems';

const ProductPage = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Product Page</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <ProductCard />
    </Row>
    <Row>
      <Col md={12}>
        <h3 className="page-title page-title--not-last">Related Items</h3>
      </Col>
    </Row>
    <Row>
      <RelatedItems />
    </Row>
  </Container>
);

export default ProductPage;
