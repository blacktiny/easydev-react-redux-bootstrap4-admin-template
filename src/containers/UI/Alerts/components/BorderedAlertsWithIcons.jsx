import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Alert from '../../../../shared/components/Alert';

const BorderedAlertsWithIcons = ({ t }) => (
  <Col md={12} lg={12} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.alerts.bordered_alerts_with_icons')}</h5>
          <h5 className="subhead">Use basic alert with class <span className="red-text">alert--bordered</span></h5>
        </div>
        <Alert color="info" className="alert--bordered" icon>
          <p><span className="bold-text">Information:</span> Learning day desirous informed expenses material
                returned six the. She enabled invited exposed him another.
          </p>
        </Alert>
        <Alert color="success" className="alert--bordered" icon>
          <p><span className="bold-text">Congratulations!</span> Learning day desirous informed expenses
                material returned six the. She enabled invited exposed him another.
          </p>
        </Alert>
        <Alert color="warning" className="alert--bordered" icon>
          <p><span className="bold-text">Attention!</span> Learning day desirous informed
                expenses material returned six the. She enabled invited exposed him another.
          </p>
        </Alert>
        <Alert color="danger" className="alert--bordered" icon>
          <p><span className="bold-text">Warning!</span> Learning day desirous informed expenses
                material returned six the. She enabled invited exposed him another.
          </p>
        </Alert>
      </CardBody>
    </Card>
  </Col>
);

BorderedAlertsWithIcons.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(BorderedAlertsWithIcons);
