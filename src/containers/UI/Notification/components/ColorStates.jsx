import React, { PureComponent } from 'react';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { BasicNotification } from '../../../../shared/components/Notification';

class ColorStates extends PureComponent {
  static propTypes = {
    showNotification: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  show = (color) => {
    const { showNotification } = this.props;
    return showNotification({
      notification: <BasicNotification
        color={color}
        title="Alert panel divider"
        message="Learning day desirous informed expenses material returned six the.
                                       She enabled invited exposed him another."
      />,
      position: 'right-up',
    });
  };

  render() {
    const { t } = this.props;

    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('ui_elements.notifications.color_notifications')}</h5>
              <h5 className="subhead">Use BasicNotification with class <span className="red-text">primary</span>,
                <span className="red-text"> success</span>,
                <span className="red-text"> warning</span>,
                <span className="red-text"> danger</span>
              </h5>
            </div>
            <ButtonToolbar>
              <Button color="primary" onClick={() => this.show('primary')}>Primary</Button>
              <Button color="success" onClick={() => this.show('success')}>Success</Button>
              <Button color="warning" onClick={() => this.show('warning')}>Warning</Button>
              <Button color="danger" onClick={() => this.show('danger')}>Danger</Button>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(ColorStates);
