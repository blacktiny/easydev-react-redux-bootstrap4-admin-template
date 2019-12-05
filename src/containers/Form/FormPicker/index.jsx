import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import DatePickers from './components/DatePickers';
import TimePickers from './components/TimePickers';
import ColorPickers from './components/ColorPickers';
import showResults from '../Show';

const FormPicker = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.from_picker.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <DatePickers onSubmit={showResults} />
      <TimePickers onSubmit={showResults} />
      <ColorPickers onSubmit={showResults} />
    </Row>
  </Container>
);

FormPicker.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(FormPicker);
