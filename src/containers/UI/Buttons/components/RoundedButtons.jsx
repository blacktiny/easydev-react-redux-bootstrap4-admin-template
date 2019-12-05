import React from 'react';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const RoundedButtons = ({ t }) => (
  <Col md={12} lg={6} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.buttons.rounded_buttons')}</h5>
          <h5 className="subhead">Use default button with class <span className="red-text">rounded</span></h5>
        </div>
        <ButtonToolbar>
          <Button className="rounded" outline>Minimal</Button>
          <Button className="rounded">Secondary</Button>
          <Button disabled className="rounded">Disabled</Button>
          <Button color="primary" className="rounded">Primary</Button>
          <Button color="success" className="rounded">Success</Button>
          <Button color="warning" className="rounded">Warning</Button>
          <Button color="danger" className="rounded">Danger</Button>
          <Button color="primary" className="rounded" outline>Primary</Button>
          <Button color="success" className="rounded" outline>Success</Button>
          <Button color="warning" className="rounded" outline>Warning</Button>
          <Button color="danger" className="rounded" outline>Danger</Button>
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
);

RoundedButtons.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(RoundedButtons);
