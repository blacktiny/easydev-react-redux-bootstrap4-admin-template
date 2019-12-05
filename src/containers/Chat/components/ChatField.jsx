import React from 'react';
import { Input } from 'reactstrap';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import EmoticonIcon from 'mdi-react/EmoticonIcon';

const ChatField = () => (
  <div className="chat__text-field">
    <form className="chat__form">
      <Input className="chat__field-input" name="chatField" placeholder="Type here…" />
      <div className="chat__field-controls">
        <button
          type="button"
          className="chat__icon-button"
          onClick={(e) => { e.preventDefault(); }}
        >
          <EmoticonIcon />
        </button>
        <button
          type="button"
          className="chat__icon-button"
          onClick={(e) => { e.preventDefault(); }}
        >
          <PaperclipIcon />
        </button>
      </div>
    </form>
  </div>
);

export default ChatField;
