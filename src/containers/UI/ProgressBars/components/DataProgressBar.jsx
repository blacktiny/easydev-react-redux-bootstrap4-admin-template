import React from 'react';
import {
  Card, CardBody, Col, Progress,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const DataProgressBar = ({ t }) => (
  <Col md={12} lg={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.progress_bars.data_progress_bar')}</h5>
          <h5 className="subhead">Use default progress with text</h5>
        </div>
        <div className="progress-wrap progress-wrap--middle">
          <Progress value={70}>70%</Progress>
        </div>
      </CardBody>
    </Card>
  </Col>
);

DataProgressBar.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(DataProgressBar);
