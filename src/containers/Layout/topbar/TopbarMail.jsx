/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'reactstrap';
import MailIcon from 'mdi-react/MailIcon';

const notifications = [
  {
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava.png`,
    name: 'Cristopher Changer',
    message: 'Good but communication was good e..',
    date: '09:02',
  },
  {
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava2.png`,
    name: 'Sveta Narry',
    message: 'It is a long established fact that a read..',
    date: '09:00',
  },
  {
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava3.png`,
    name: 'Lory McQueen',
    message: 'There are many variations of passages..',
    date: '08:43',
  },
  {
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava2.png`,
    name: 'Cristopher Changer',
    message: 'Yas sent you an invitation to join proje..',
    date: '08:43',
  },
];

export default class TopbarMail extends PureComponent {
  state = {
    collapse: false,
  };

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  render() {
    const { collapse } = this.state;
    return (
      <div className="topbar__collapse">
        <button className="topbar__btn topbar__btn--mail topbar__btn--new" type="button" onClick={this.toggle}>
          <MailIcon />
          <div className="topbar__btn-new-label">
            <div />
          </div>
        </button>
        {collapse && <button className="topbar__back" type="button" onClick={this.toggle} />}
        <Collapse
          isOpen={collapse}
          className="topbar__collapse-content"
        >
          <div className="topbar__collapse-title-wrap">
            <p className="topbar__collapse-title">Unread messages</p>
            <button className="topbar__collapse-button" type="button">Mark all as read</button>
          </div>
          {notifications.map((notification, index) => (
            <div className="topbar__collapse-item" key={index}>
              <div className="topbar__collapse-img-wrap">
                <img className="topbar__collapse-img" src={notification.ava} alt="" />
              </div>
              <p className="topbar__collapse-name">{notification.name}</p>
              <p className="topbar__collapse-message topbar__collapse-message--mail">{notification.message}</p>
              <p className="topbar__collapse-date">{notification.date}</p>
            </div>
          ))}
          <Link className="topbar__collapse-link" to="/mail" onClick={this.toggle}>
            See all messages
          </Link>
        </Collapse>
      </div>
    );
  }
}
