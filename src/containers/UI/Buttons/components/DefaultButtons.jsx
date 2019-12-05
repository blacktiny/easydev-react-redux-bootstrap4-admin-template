import React from 'react';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const DefaultButtons = ({ t }) => (
  <Col md={12} lg={6} xl={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.buttons.default_buttons')}</h5>
          <h5 className="subhead">Use default button with necessary values of properties
            <span className="red-text"> color</span>,
            <span className="red-text"> outline</span> and
            <span className="red-text"> disabled</span>
          </h5>
        </div>
        <div className="card__title">
          <h5 className="subhead">Modifier color <span className="red-text">primary</span>,
            <span className="red-text"> success</span>,
            <span className="red-text"> warning</span>,
            <span className="red-text"> danger</span>
          </h5>
          <h5 className="subhead">Modifier outline and disabled <span className="red-text">true</span>,
            <span className="red-text"> false</span>
          </h5>
        </div>
        <ButtonToolbar>
          <Button outline>Minimal</Button>
          <Button>Secondary</Button>
          <Button disabled>Disabled</Button>
          <Button color="primary">Primary</Button>
          <Button color="success">Success</Button>
          <Button color="warning">Warning</Button>
          <Button color="danger">Danger</Button>
          <Button color="primary" outline>Primary</Button>
          <Button color="success" outline>Success</Button>
          <Button color="warning" outline>Warning</Button>
          <Button color="danger" outline>Danger</Button>
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
);

DefaultButtons.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(DefaultButtons);
