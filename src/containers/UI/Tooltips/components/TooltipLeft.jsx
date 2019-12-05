import React from 'react';
import {
  Button, ButtonToolbar, Card, CardBody, Col, UncontrolledTooltip,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const TooltipLeft = ({ t, dir }) => (
  <Col sm={12} md={6} lg={6} xl={3} className="card-tooltip">
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.tooltips_popovers.tooltip_on_left')}</h5>
          <h5 className="subhead">Use default tooltip with placement <span className="red-text">left</span></h5>
        </div>
        <ButtonToolbar className="btn-toolbar--center">
          <Button id="TooltipLeft" outline className="button-tooltip">
                Tooltip on Left
          </Button>
          <UncontrolledTooltip dir={dir} placement="left" target="TooltipLeft">
                Do you like dragons?
          </UncontrolledTooltip>
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
);

TooltipLeft.propTypes = {
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
};

export default withTranslation('common')(TooltipLeft);
