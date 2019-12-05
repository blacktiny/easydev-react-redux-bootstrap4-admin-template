import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import PropTypes from 'prop-types';

const ToolbarOptions = {
  options: ['inline', 'blockType', 'list', 'textAlign', 'link', 'emoji', 'image', 'history'],
  inline: {
    options: ['bold', 'italic', 'underline'],
  },
};

export default class TextEditorTwo extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }

  onEditorStateChange = (editorState) => {
    const { onChange } = this.props;

    this.setState({
      editorState,
    });
    if (onChange) { onChange(draftToHtml(convertToRaw(editorState.getCurrentContent()))); }
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="text-editor">
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={ToolbarOptions}
        />
      </div>
    );
  }
}
