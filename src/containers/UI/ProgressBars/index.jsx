import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import DefaultProgressBar from './components/DefaultProgressBar';
import DataProgressBar from './components/DataProgressBar';
import AnimatedProgressBar from './components/AnimatedProgressBar';
import ColoredProgressBars from './components/ColoredProgressBars';
import MultisizedProgressBars from './components/MultisizedProgressBars';
import AnimatedMultisizedProgressBars from './components/AnimatedMultisizedProgressBars';

const ProgressBars = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.progress_bars.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <DefaultProgressBar />
      <DataProgressBar />
      <AnimatedProgressBar />
      <ColoredProgressBars />
      <MultisizedProgressBars />
      <AnimatedMultisizedProgressBars />
    </Row>
  </Container>
);

ProgressBars.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(ProgressBars);
