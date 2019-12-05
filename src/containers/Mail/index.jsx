import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import InboxCard from './components/InboxCard';

const Mail = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('mail_application.page_title')}</h3>
        <h3 className="page-subhead subhead">You can compose an email here</h3>
      </Col>
    </Row>
    <Row>
      <InboxCard />
    </Row>
  </Container>
);

Mail.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Mail);
