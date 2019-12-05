import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ContactProps } from '../../../shared/prop-types/ChatProps';

export default class ChatUser extends PureComponent {
  static propTypes = {
    contact: ContactProps.isRequired,
    active: PropTypes.bool,
  };

  static defaultProps = {
    active: false,
  };

  render() {
    const { contact, active } = this.props;
    let lastMessage = '';
    if (contact.messages.length) {
      lastMessage = contact.messages.slice(-1)[0].message;
    } else {
      lastMessage = 'new contact';
    }
    const contactClass = classNames({
      chat__contact: true,
      'chat__contact--active': active,
    });

    return (
      <div className={contactClass}>
        <div className="chat__contact-avatar">
          <img src={contact.avatar} alt="ava" />
        </div>
        <div className="chat__contact-preview">
          <p className="chat__contact-name">{contact.name}</p>
          <p className="chat__contact-post">{contact.post}</p>
          <p className="chat__contact-last-message">{lastMessage}</p>
        </div>
      </div>
    );
  }
}
