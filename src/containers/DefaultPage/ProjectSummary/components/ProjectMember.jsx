import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon';

export default class ProjectMember extends PureComponent {
  static propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    post: PropTypes.string,
    link: PropTypes.string.isRequired,
  };

  static defaultProps = {
    post: '',
  };

  render() {
    const {
      img, name, post, link,
    } = this.props;

    return (
      <div className="project-member">
        <div className="project-member__avatar-wrap">
          <img src={img} alt="" />
        </div>
        <div>
          <p className="project-member__name">{name}</p>
          <p className="project-member__post">{post}</p>
        </div>
        <Link
          className="project-member__btn btn btn-outline-primary btn-sm icon"
          to={link}
        ><EmailOutlineIcon />
        </Link>
      </div>
    );
  }
}
