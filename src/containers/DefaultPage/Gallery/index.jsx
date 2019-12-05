import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import FilterGallery from './components/FilterGallery';

const Gallery = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Gallery</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <FilterGallery />
    </Row>
  </Container>
);

export default Gallery;
