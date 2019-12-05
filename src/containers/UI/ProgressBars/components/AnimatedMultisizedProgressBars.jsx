import React from 'react';
import {
  Card, CardBody, Col, Progress,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const AnimatedMultisizedProgressBars = ({ t }) => (
  <Col md={12} lg={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.progress_bars.animated_multisized_progress_bars')}</h5>
          <h5 className="subhead">Use default progress with combination of classes and property
            <span className="red-text"> animated</span>
          </h5>
        </div>
        <div className="progress-wrap">
          <Progress animated value={20} />
        </div>
        <div className="progress-wrap progress-wrap--small">
          <Progress animated value={40} />
        </div>
        <div className="progress-wrap progress-wrap--middle">
          <Progress animated value={60} />
        </div>
        <div className="progress-wrap progress-wrap--big">
          <Progress animated value={80} />
        </div>
      </CardBody>
    </Card>
  </Col>
);

AnimatedMultisizedProgressBars.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(AnimatedMultisizedProgressBars);
