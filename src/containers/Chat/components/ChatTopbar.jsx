import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from 'mdi-react/MenuIcon';
import MoreVertIcon from 'mdi-react/MoreVertIcon';
import VideoIcon from 'mdi-react/VideoIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';
import StarIcon from 'mdi-react/StarIcon';
import { ContactProps } from '../../../shared/prop-types/ChatProps';

const ChatTopbar = ({ onClick, contact }) => (
  <div className="chat__topbar">
    <button className="chat__topbar-button chat__topbar-button--menu" type="button" onClick={onClick}>
      <MenuIcon className="chat__topbar-button-icon" />
    </button>
    {contact
    && (
    <div className="chat__topbar-contact">
      <p className="chat__topbar-contact-name">{contact.name}</p>
      <p className="chat__topbar-contact-post">{contact.post}</p>
    </div>
    ) }
    <div className="chat__topbar-right">
      {contact
        && (
        <div className="chat__topbar-controls">
          <button className="chat__topbar-button" type="button">
            <VideoIcon className="chat__topbar-button-icon" />
          </button>
          <button className="chat__topbar-button" type="button">
            <PhoneIcon className="chat__topbar-button-icon" />
          </button>
          <button className="chat__topbar-button" type="button">
            <StarIcon className="chat__topbar-button-icon" />
          </button>
        </div>
        )
      }
      <button className="chat__topbar-button" type="button">
        <MoreVertIcon className="chat__topbar-button-icon" />
      </button>
    </div>
  </div>
);

ChatTopbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  contact: ContactProps,
};

ChatTopbar.defaultProps = {
  contact: null,
};

export default ChatTopbar;
