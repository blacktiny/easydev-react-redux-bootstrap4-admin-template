import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import EditTable from './components/EditableTable';

const EditableTable = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('tables.editable_table.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <EditTable />
    </Row>
  </Container>
);

EditableTable.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(EditableTable);
