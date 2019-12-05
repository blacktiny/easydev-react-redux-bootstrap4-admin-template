import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ChatCard from './components/ChatCard';

const Chat = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('chat_application.page_title')}</h3>
      </Col>
    </Row>
    <Row>
      <ChatCard />
    </Row>
  </Container>
);

Chat.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Chat);
