import React from 'react';
import {
  ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Modal from '../../../../shared/components/Modal';

const HeaderModals = ({ t }) => (
  <Col md={12} lg={12} xl={4}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.modals.header_modals')}</h5>
          <h5 className="subhead">Use default progress with property <span className="red-text">header</span></h5>
        </div>
        <ButtonToolbar>
          <Modal
            color="primary"
            title="Congratulations!"
            header
            btn="Default"
            message="Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal
                   brought minuter raising invited gay. Contented consisted continual curiosity contained get sex.
                   Forth child dried in in aware do. You had met they song how feel lain evil near. Small she
                   avoid six yet table china. And bed make say been then dine mrs. To household rapturous
                   fulfilled attempted on so. "
          />
          <Modal
            color="success"
            title="Well Done!"
            header
            btn="Success"
            message="Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal
                   brought minuter raising invited gay. Contented consisted continual curiosity contained get sex.
                   Forth child dried in in aware do. You had met they song how feel lain evil near. Small she
                   avoid six yet table china. And bed make say been then dine mrs. To household rapturous
                   fulfilled attempted on so. "
          />
          <Modal
            color="warning"
            title="Attention!"
            header
            btn="Warning"
            message="Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal
                   brought minuter raising invited gay. Contented consisted continual curiosity contained get sex.
                   Forth child dried in in aware do. You had met they song how feel lain evil near. Small she
                   avoid six yet table china. And bed make say been then dine mrs. To household rapturous
                   fulfilled attempted on so. "
          />
          <Modal
            color="danger"
            title="Stop!"
            header
            btn="Danger"
            message="Extremely we promotion remainder eagerness enjoyment an. Ham her demands removal
                  brought minuter raising invited gay. Contented consisted continual curiosity contained get sex.
                  Forth child dried in in aware do. You had met they song how feel lain evil near. Small she
                  avoid six yet table china. And bed make say been then dine mrs. To household rapturous
                  fulfilled attempted on so. "
          />
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
);

HeaderModals.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(HeaderModals);
