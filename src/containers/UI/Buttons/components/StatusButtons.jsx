import React from 'react';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const StatusButtons = ({ t }) => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.buttons.status_buttons')}</h5>
          <h5 className="subhead">Use default buttons with property <span className="red-text">size</span></h5>
        </div>
        <h5 className="bold-text">Small buttons</h5>
        <div className="card__title">
          <h5 className="subhead">Use the modifier <span className="red-text">sm</span></h5>
        </div>
        <ButtonToolbar>
          <Button size="sm" outline>Minimal</Button>
          <Button size="sm">Secondary</Button>
          <Button disabled size="sm">Disabled</Button>
          <Button color="primary" size="sm">Primary</Button>
          <Button color="success" size="sm">Success</Button>
          <Button color="warning" size="sm">Warning</Button>
          <Button color="danger" size="sm">Danger</Button>
          <Button color="primary" outline size="sm">Primary</Button>
          <Button color="success" outline size="sm">Success</Button>
          <Button color="warning" outline size="sm">Warning</Button>
          <Button color="danger" outline size="sm">Danger</Button>
        </ButtonToolbar>
        <h5 className="bold-text">Large buttons</h5>
        <div className="card__title">
          <h5 className="subhead">Use the modifier <span className="red-text">lg</span></h5>
        </div>
        <ButtonToolbar>
          <Button size="lg" outline>Minimal</Button>
          <Button size="lg">Secondary</Button>
          <Button disabled size="lg">Disabled</Button>
          <Button color="primary" size="lg">Primary</Button>
          <Button color="success" size="lg">Success</Button>
          <Button color="warning" size="lg">Warning</Button>
          <Button color="danger" size="lg">Danger</Button>
          <Button color="primary" outline size="lg">Primary</Button>
          <Button color="success" outline size="lg">Success</Button>
          <Button color="warning" outline size="lg">Warning</Button>
          <Button color="danger" outline size="lg">Danger</Button>
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
);

StatusButtons.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(StatusButtons);
