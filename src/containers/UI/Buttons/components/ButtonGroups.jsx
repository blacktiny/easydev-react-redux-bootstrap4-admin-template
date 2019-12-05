import React from 'react';
import {
  Button, ButtonGroup, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const ButtonGroups = ({ t }) => (
  <Col md={12} lg={6} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.buttons.button_group')}</h5>
        </div>
        <h5 className="bold-text">Icon group</h5>
        <div className="card__title">
          <h5 className="subhead">Use default button group with class
            <span className="red-text"> btn-group--icons</span>
          </h5>
        </div>
        <ButtonToolbar>
          <ButtonGroup className="btn-group--icons" dir="ltr">
            <Button outline><span className="lnr lnr-pushpin" /></Button>
            <Button outline><span className="lnr lnr-heart-pulse" /></Button>
            <Button outline><span className="lnr lnr-cog" /></Button>
            <Button outline><span className="lnr lnr-magic-wand" /></Button>
          </ButtonGroup>
        </ButtonToolbar>
        <h5 className="bold-text">Large buttons</h5>
        <div className="card__title">
          <h5 className="subhead">Use default button group</h5>
        </div>
        <ButtonToolbar>
          <ButtonGroup dir="ltr">
            <Button outline>Left</Button>
            <Button outline>Middle</Button>
            <Button outline>Right</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <h5 className="bold-text">Justify buttons</h5>
        <div className="card__title">
          <h5 className="subhead">Use default button group with class
            <span className="red-text"> btn-group--justified</span>
          </h5>
        </div>
        <ButtonToolbar>
          <ButtonGroup className="btn-group--justified" dir="ltr">
            <Button color="primary">Left</Button>
            <Button color="primary">Middle</Button>
            <Button color="primary">Right</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
);

ButtonGroups.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(ButtonGroups);
