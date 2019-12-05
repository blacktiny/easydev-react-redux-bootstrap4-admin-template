/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export class BasicNotification extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: '',
    title: '',
  };

  render() {
    const { color, title, message } = this.props;

    return (
      <div className={`notification notification--${color}`}>
        <h5 className="notification__title bold-text">{title}</h5>
        <p className="notification__message">{message}</p>
      </div>
    );
  }
}

export class ImageNotification extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
    message: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
  };

  render() {
    const { img, title, message } = this.props;

    return (
      <div className="notification notification--image">
        <div className="notification__image">
          <img src={img} alt="" />
        </div>
        <h5 className="notification__title bold-text">{title}</h5>
        <p className="notification__message">{message}</p>
      </div>
    );
  }
}

export class FullWideNotification extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    message: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: '',
  };

  render() {
    const { color, message } = this.props;

    return (
      <div className={`notification notification--full-wide notification--${color}`}>
        <p className="notification__message">{message}</p>
      </div>
    );
  }
}
