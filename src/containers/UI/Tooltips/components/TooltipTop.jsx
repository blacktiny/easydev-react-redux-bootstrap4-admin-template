import React from 'react';
import {
  Button, ButtonToolbar, Card, CardBody, Col, UncontrolledTooltip,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const TooltipTop = ({ t, dir }) => (
  <Col sm={12} md={6} lg={6} xl={3} className="card-tooltip">
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.tooltips_popovers.tooltip_on_top')}</h5>
          <h5 className="subhead">Use default tooltip with placement <span className="red-text">top</span></h5>
        </div>
        <ButtonToolbar className="btn-toolbar--center">
          <Button id="TooltipTop" outline className="button-tooltip">
                Tooltip on Top
          </Button>
          <UncontrolledTooltip dir={dir} placement="top" target="TooltipTop">
                Do you like dragons?
          </UncontrolledTooltip>
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
);

TooltipTop.propTypes = {
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
};

export default withTranslation('common')(TooltipTop);
