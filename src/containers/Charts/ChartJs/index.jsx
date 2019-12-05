import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import PointSizes from './components/PointSizes';
import RandomAnimatedLine from './components/RandomAnimatedLine';
import RandomAnimatedBars from './components/RandomAnimatedBars';
import PolarArea from './components/PolarArea';
import DynamiclyRefreshedDoughnut from './components/DynamiclyRefreshedDoughnut';
import LegendHandlers from './components/LegendHandlers';

const ChartsJS = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('charts.react_chartjs.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <PointSizes />
      <RandomAnimatedLine />
      <RandomAnimatedBars />
      <PolarArea />
      <DynamiclyRefreshedDoughnut />
      <LegendHandlers />
    </Row>
  </Container>
);

ChartsJS.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(ChartsJS);
