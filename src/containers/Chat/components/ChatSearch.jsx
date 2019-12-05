import React from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

const ChatSearch = () => (
  <div className="chat__search">
    <input className="chat__search-input" placeholder="Search" />
    <MagnifyIcon />
  </div>
);

export default ChatSearch;
