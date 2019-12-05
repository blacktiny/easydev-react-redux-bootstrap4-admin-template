import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SearchHere from './components/SearchHere';

const SearchResults = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Search Results</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <SearchHere />
    </Row>
  </Container>
);

export default SearchResults;
