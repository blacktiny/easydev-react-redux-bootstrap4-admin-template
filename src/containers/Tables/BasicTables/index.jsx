import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import BasicTable from './components/BasicTable';
import BorderedTable from './components/BorderedTable';
import HeadAccentTable from './components/HeadAccentTable';
import ColoredStringTable from './components/ColoredStringTable';
import ResponsiveTable from './components/ResponsiveTable';

const BasicTables = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('tables.basic_tables.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <BasicTable />
      <BorderedTable />
      <HeadAccentTable />
      <ColoredStringTable />
      <ResponsiveTable />
    </Row>
  </Container>
);

BasicTables.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BasicTables);
