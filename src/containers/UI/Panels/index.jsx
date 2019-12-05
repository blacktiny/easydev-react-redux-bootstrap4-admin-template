import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import DefaultPanel from './components/DefaultPanel';
import DefaultPanelWithSubheader from './components/DefaultPanelWithSubhead';
import DefaultPanelDivider from './components/DefaultPanelDivider';
import LabelPanelDivider from './components/LabelPanelDivider';
import IconPanelDivider from './components/IconPanelDivider';
import TabsPanelDivider from './components/TabsPanelDivider';
import SuccessPanel from './components/SuccessPanel';
import WarningPanel from './components/WarningPanel';
import DangerPanel from './components/DangerPanel';

const Panels = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.panels.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints
              or additional information
        </h3>
      </Col>
    </Row>
    <Row>
      <DefaultPanel />
      <DefaultPanelWithSubheader />
      <DefaultPanelDivider />
      <LabelPanelDivider />
      <IconPanelDivider />
      <TabsPanelDivider />
      <SuccessPanel />
      <WarningPanel />
      <DangerPanel />
    </Row>
  </Container>
);

Panels.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Panels);
