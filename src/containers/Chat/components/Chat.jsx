/* eslint-disable react/no-array-index-key */

import React, { PureComponent } from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import ChatContact from './ChatContact';
import ChatBubble from './ChatBubble';
import ChatSearch from './ChatSearch';
import ChatField from './ChatField';
import ChatTopbar from './ChatTopbar';
import { CurrentUserProps, ContactsProps } from '../../../shared/prop-types/ChatProps';

export default class Chat extends PureComponent {
  static propTypes = {
    currentUser: CurrentUserProps.isRequired,
    contacts: ContactsProps.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      currentMessages: props.contacts[0].messages,
      currentChat: props.contacts[0].userName,
      openContacts: false,
    };
  }


  onOpenChat = (contact, e) => {
    const { contacts } = this.props;

    e.preventDefault();
    const dialog = contacts.find(c => c.userName === contact).messages;
    const messages = dialog || null;
    this.setState({
      currentChat: contact,
      currentMessages: messages,
    });
  };

  onOpenContacts = () => {
    this.setState(prevState => ({ openContacts: !prevState.openContacts }));
  };

  render() {
    const { openContacts, currentChat, currentMessages } = this.state;

    const { currentUser, contacts } = this.props;
    const chatClass = classNames({
      chat: true,
      'chat--open': openContacts,
    });

    const contactsClass = classNames({
      'chat__contact-list': true,
      'chat__contact-list--open': openContacts,
    });

    return (
      <div
        className={chatClass}
        onClick={openContacts ? this.onOpenContacts : null}
        role="presentation"
      >
        <div className={contactsClass}>
          <ChatSearch />
          <div className="chat__contacts">
            <Scrollbar className="scroll chat__contacts-scroll" alwaysShowTracks>
              {contacts.map((c, i) => (
                <button key={i} type="button" onClick={e => this.onOpenChat(c.userName, e)}>
                  <ChatContact active={c.userName === currentChat} contact={c} />
                </button>
              ))}
            </Scrollbar>
          </div>
        </div>
        {currentChat === null
          ? (
            <div className="chat__dialog">
              <ChatTopbar onClick={this.onOpenContacts} />
              <div className="chat__dialog-select-message">
                <p>Select a chat to start messaging</p>
              </div>
            </div>
          )
          : (
            <div className="chat__dialog">
              <ChatTopbar
                contact={contacts.find(c => c.userName === currentChat)}
                onClick={this.onOpenContacts}
              />
              <Scrollbar className="scroll chat__scroll" alwaysShowTracks>
                <div className="chat__dialog-messages-wrap">
                  {currentMessages === null || currentMessages.length === 0
                    ? (
                      <div className="chat__dialog-messages">
                        <div className="chat__dialog-messages-empty">
                          <p>No messages</p>
                        </div>
                      </div>
                    )
                    : (
                      <div className="chat__dialog-messages">
                        {currentMessages.map((m, i) => (
                          <ChatBubble
                            key={i}
                            contact={m.userName === currentUser.userName ? currentUser
                              : contacts.find(c => c.userName === m.userName)}
                            message={m}
                            date={m}
                            active={m.userName === currentUser.userName}
                          />
                        ))}
                      </div>
                    )
                }
                </div>
              </Scrollbar>
              <ChatField />
            </div>
          )
        }
      </div>
    );
  }
}
