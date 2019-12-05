import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classNames from 'classnames';
import { ContactProps, MessageProps } from '../../../shared/prop-types/ChatProps';

export default class ChatBubble extends PureComponent {
  static propTypes = {
    contact: ContactProps.isRequired,
    message: MessageProps.isRequired,
    active: PropTypes.bool,
  };

  static defaultProps = {
    active: false,
  };

  render() {
    const { contact, message, active } = this.props;
    const bubbleClass = classNames({
      chat__bubble: true,
      'chat__bubble--active': active,
    });

    return (
      <div className={bubbleClass}>
        <div className="chat__bubble-avatar">
          <img src={contact.avatar} alt="ava" />
        </div>
        {message.file
          ? (
            <div className="chat__bubble-message-wrap chat__bubble-message-wrap--file">
              <p className="chat__bubble-contact-name">{contact.name}</p>
              <img src={message.file.preview} alt={message.message} />
              <p className="chat__bubble-date">{moment(message.date).format('LT')}</p>
              <div className="chat__bubble-download-wrap">
                <p className="chat__bubble-file-name">
                  <span>{message.message}</span>
                  <span>{message.file.size}</span>
                </p>
                <a className="chat__bubble-download" href={message.file.preview} download>Download</a>
              </div>
            </div>
          )
          : (
            <div className="chat__bubble-message-wrap">
              <p className="chat__bubble-contact-name">{contact.name}</p>
              <p className="chat__bubble-message">{message.message}</p>
              <p className="chat__bubble-date">{moment(message.date).format('LT')}</p>
            </div>
          )
        }
      </div>
    );
  }
}
