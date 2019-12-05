import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import SliderWithoutParams from './components/SliderWithoutParams';
import SliderStartPoint from './components/SliderStartPoint';
import DoubleSliderType from './components/DoubleSliderType';
import SliderWithScale from './components/SliderWithScale';


const RangeSliders = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.range_sliders.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <SliderWithoutParams />
      <SliderStartPoint />
      <DoubleSliderType />
      <SliderWithScale />
    </Row>
  </Container>
);

RangeSliders.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(RangeSliders);
