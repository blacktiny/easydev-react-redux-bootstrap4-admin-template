import React from 'react';
import {
  Container, Row, Col, CardBody, Card,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Grids = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.grids.title')}</h3>
        <h3 className="page-subhead subhead">Here is the examples of grids you can use in any component you need
        </h3>
      </Col>
    </Row>
    <Row>
      <Col md={12} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-12</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={11} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-11</p>
          </CardBody>
        </Card>
      </Col>
      <Col md={1} sm={12}>
        <Card className="grid">
          <CardBody>
            <p className="grid__small">col-md-1</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={10} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-10</p>
          </CardBody>
        </Card>
      </Col>
      <Col md={2} sm={12}>
        <Card className="grid">
          <CardBody>
            <p className="grid__small">col-md-2</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={9} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-9</p>
          </CardBody>
        </Card>
      </Col>
      <Col md={3} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-3</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={8} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-8</p>
          </CardBody>
        </Card>
      </Col>
      <Col md={4} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-4</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={7} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-7</p>
          </CardBody>
        </Card>
      </Col>
      <Col md={5} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-5</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col md={6} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-6</p>
          </CardBody>
        </Card>
      </Col>
      <Col md={6} sm={12}>
        <Card className="grid">
          <CardBody>
            <p>col-md-6</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

Grids.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Grids);
