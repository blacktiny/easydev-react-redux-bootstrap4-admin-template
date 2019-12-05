import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SimpleLineChart from './components/SimpleLineChart';
import DashedLineChart from './components/DashedLineChart';
import SimpleAreaChart from './components/SimpleAreaChart';
import StackedAreaChart from './components/StackedAreaChart';
import MultipleYAxesScatterChart from './components/MultipleYAxesScatterChart';
import SimpleRadialBarChart from './components/SimpleRadialBarChart';
import SimpleRadarChart from './components/SimpleRadarChart';
import TwoLevelPieChart from './components/TwoLevelPieChart';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const Recharts = ({ t, rtl }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('charts.recharts.title')}</h3>
        <h3 className="page-subhead subhead">
          Use this elements, if you want to show some hints or additional information
        </h3>
      </Col>
    </Row>
    <Row>
      <SimpleLineChart dir={rtl.direction} />
      <DashedLineChart dir={rtl.direction} />
      <SimpleAreaChart dir={rtl.direction} />
      <StackedAreaChart dir={rtl.direction} />
      <MultipleYAxesScatterChart dir={rtl.direction} />
      <SimpleRadialBarChart dir={rtl.direction} />
      <SimpleRadarChart />
      <TwoLevelPieChart dir={rtl.direction} />
    </Row>
  </Container>
);

Recharts.propTypes = {
  t: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(withTranslation('common')(Recharts));
