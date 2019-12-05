import React, { PureComponent } from 'react';
import {
  Button, ButtonToolbar, Card, CardBody, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { ImageNotification } from '../../../../shared/components/Notification';

const image = `${process.env.PUBLIC_URL}/img/photo_notification.png`;

class ImageNotifications extends PureComponent {
  static propTypes = {
    showNotification: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
  };

  show = (position) => {
    const { showNotification } = this.props;
    return showNotification({
      notification: <ImageNotification
        title="Lora Simpson"
        img={image}
        message="Learning day desirous informed expenses material returned
                                       six the. She enabled …"
      />,
      position,
    });
  };

  render() {
    const { t } = this.props;

    return (
      <Col md={12} lg={6} xs={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{t('ui_elements.notifications.image_notifications')}</h5>
              <h5 className="subhead">Use ImageNotification with necessary value of properties
                <span className="red-text"> position</span> and <span className="red-text">img</span>
              </h5>
            </div>
            <ButtonToolbar>
              <Button outline onClick={() => this.show('left-up')}>Left Up</Button>
              <Button outline onClick={() => this.show('right-up')}>Right Up</Button>
            </ButtonToolbar>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default withTranslation('common')(ImageNotifications);
