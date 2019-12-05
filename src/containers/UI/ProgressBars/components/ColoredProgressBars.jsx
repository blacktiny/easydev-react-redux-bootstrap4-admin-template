import React from 'react';
import {
  Card, CardBody, Col, Progress,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ColoredProgressBars = ({ t }) => (
  <Col md={12} lg={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.progress_bars.colored_progress_bars')}</h5>
          <h5 className="subhead">Use default progress with class
            <span className="red-text"> progress-wrap--yellow</span>,
            <span className="red-text"> progress-wrap--violet</span>,
            <span className="red-text"> progress-wrap--pink</span>,
            <span className="red-text"> progress-wrap--blue</span>
          </h5>
        </div>
        <div className="progress-wrap">
          <Progress value={20} />
        </div>
        <div className="progress-wrap progress-wrap--yellow">
          <Progress value={30} />
        </div>
        <div className="progress-wrap progress-wrap--violet">
          <Progress value={40} />
        </div>
        <div className="progress-wrap progress-wrap--pink">
          <Progress value={50} />
        </div>
        <div className="progress-wrap progress-wrap--blue">
          <Progress value={60} />
        </div>
      </CardBody>
    </Card>
  </Col>
);

ColoredProgressBars.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(ColoredProgressBars);
