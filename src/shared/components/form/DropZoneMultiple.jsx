/* eslint-disable react/no-array-index-key */
import React, { PureComponent } from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

class DropZoneMultipleField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
      })),
    ]).isRequired,
  };

  constructor() {
    super();
    this.state = {};
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(files) {
    const { onChange } = this.props;
    onChange(files.map(fl => Object.assign(fl, {
      preview: URL.createObjectURL(fl),
    })));
  }

  removeFile= (index, e) => {
    const { value, onChange } = this.props;
    e.preventDefault();
    onChange(value.filter((val, i) => i !== index));
  };

  render() {
    const { name, value } = this.props;
    const files = value;

    return (
      <div className="dropzone dropzone--multiple">
        <Dropzone
          className="dropzone__input"
          accept="image/jpeg, image/png"
          name={name}
          onDrop={(filesToUpload) => {
            this.onDrop(value ? value.concat(filesToUpload) : filesToUpload);
          }}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="dropzone__input">
              {(!files || files.length === 0)
              && (
                <div className="dropzone__drop-here">
                  <span className="lnr lnr-upload" /> Drop file here to upload
                </div>
              )}
              <input {...getInputProps()} />
            </div>
          )}
        </Dropzone>
        {files && Array.isArray(files)
        && (
        <div className="dropzone__imgs-wrapper">
          {files.map((file, i) => (
            <div className="dropzone__img" key={i} style={{ backgroundImage: `url(${file.preview})` }}>
              <p className="dropzone__img-name">{file.name}</p>
              <button className="dropzone__img-delete" type="button" onClick={e => this.removeFile(i, e)}>
                Remove
              </button>
            </div>
          ))}
        </div>
        )}
      </div>
    );
  }
}

const renderDropZoneMultipleField = (props) => {
  const { input } = props;
  return (
    <DropZoneMultipleField
      {...input}
    />
  );
};

renderDropZoneMultipleField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
    name: PropTypes.string,
  }).isRequired,
};

export default renderDropZoneMultipleField;
