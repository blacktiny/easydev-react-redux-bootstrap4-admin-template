/* eslint-disable no-return-assign */
import React, { PureComponent } from 'react';
import { Col, Container, Row } from 'reactstrap';
import NotificationSystem from 'rc-notification';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import BasicNotifications from './components/BasicNotifications';
import ImageNotifications from './components/ImageNotifications';
import ColorStates from './components/ColorStates';
import ColorStatesFullWidth from './components/ColorStatesFullWidth';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

let notificationLU = null;
let notificationRU = null;
let notificationTC = null;

const showNotification = ({ notification, position }, rtl) => {
  switch (position) {
    case 'left-up':
      notificationLU.notice({
        content: notification,
        duration: 5,
        closable: true,
        style: { top: 0, left: 0 },
        className: `${position} ${rtl}-support`,
      });
      break;
    case 'right-up':
      notificationRU.notice({
        content: notification,
        duration: 5,
        closable: true,
        style: { top: 0, left: 'calc(100vw - 100%)' },
        className: `${position} ${rtl}-support`,
      });
      break;
    default:
      notificationTC.notice({
        content: notification,
        duration: 5,
        closable: true,
        style: { top: 0, left: 0 },
        className: `${position} ${rtl}-support`,
      });
      break;
  }
};

class Notifications extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
    rtl: RTLProps.isRequired,
  };

  componentDidMount() {
    NotificationSystem.newInstance({ style: { top: 65 } }, n => notificationLU = n);
    NotificationSystem.newInstance({ style: { top: 65 } }, n => notificationRU = n);
    NotificationSystem.newInstance({ style: { top: 65 } }, n => notificationTC = n);
  }

  componentWillUnmount() {
    notificationLU.destroy();
    notificationRU.destroy();
    notificationTC.destroy();
  }

  render() {
    const { t, rtl } = this.props;

    return (
      <Container>
        <Row>
          <Col md={12}>
            <h3 className="page-title">{t('ui_elements.notifications.title')}</h3>
            <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
            </h3>
          </Col>
        </Row>
        <Row>
          <BasicNotifications
            showNotification={
              ({ notification, position }) => showNotification({ notification, position }, rtl.direction)
            }
          />
          <ImageNotifications
            showNotification={
              ({ notification, position }) => showNotification({ notification, position }, rtl.direction)
            }
          />
          <ColorStates
            showNotification={
              ({ notification, position }) => showNotification({ notification, position }, rtl.direction)
            }
          />
          <ColorStatesFullWidth
            showNotification={
              ({ notification, position }) => showNotification({ notification, position }, rtl.direction)
            }
          />
        </Row>
      </Container>
    );
  }
}

export default compose(withTranslation('common'), connect(state => ({
  rtl: state.rtl,
})))(Notifications);
