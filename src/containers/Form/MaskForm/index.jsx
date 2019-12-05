import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MaskExamples from './components/MaskExamples';
import showResults from '../Show';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const MaskForm = ({ t, rtl }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('forms.mask_form.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <MaskExamples onSubmit={showResults} dir={rtl.direction} />
    </Row>
  </Container>
);

MaskForm.propTypes = {
  t: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(withTranslation('common')(MaskForm));
