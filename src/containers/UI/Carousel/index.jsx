import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import BasicCarousel from './components/BasicCarousel';
import BasicCarouselWithoutCaption from './components/BasicCarouselWithoutCaption';
import BasicCarouselWithCaption from './components/BasicCarouselWithCaption';

const Carousel = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.carousel.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <BasicCarousel />
      <BasicCarouselWithoutCaption />
      <BasicCarouselWithCaption />
    </Row>
  </Container>
);

Carousel.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Carousel);
