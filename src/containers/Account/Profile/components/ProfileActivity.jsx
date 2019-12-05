import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ProfileActivity extends PureComponent {
  static propTypes = {
    date: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element),
    ]).isRequired,
  };

  static defaultProps = {
    date: '',
    img: '',
    name: '',
  };

  render() {
    const {
      img, name, date, children,
    } = this.props;
    return (
      <div className="profile__activity">
        <div className="profile__activity-avatar">
          <img src={img} alt="" />
        </div>
        <div>
          <p className="profile__activity-name">{name}
            <span className="profile__activity-date"> {date}</span>
          </p>
          {children}
        </div>
      </div>
    );
  }
}
