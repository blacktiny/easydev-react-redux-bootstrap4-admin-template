import React, { Component } from 'react';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class SidebarCategory extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    isNew: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
  };

  static defaultProps = {
    icon: '',
    isNew: false,
  };

  constructor() {
    super();
    this.state = {
      collapse: false,
    };
  }

  toggle = () => {
    const { collapse } = this.state;
    this.setState({ collapse: !collapse });
  };

  render() {
    const {
      title, icon, isNew, children,
    } = this.props;
    const { collapse } = this.state;
    const categoryClass = classNames({
      'sidebar__category-wrap': true,
      'sidebar__category-wrap--open': collapse,
      'sidebar__link sidebar__category': true,
    });

    return (
      <div>
        <button className={categoryClass} type="button" onClick={this.toggle}>
          {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
          <p className="sidebar__link-title">{title}
            {isNew && <span className="sidebar__category-new" />}
          </p>
          <span className="sidebar__category-icon lnr lnr-chevron-right" />
        </button>
        <Collapse isOpen={collapse} className="sidebar__submenu-wrap">
          <ul className="sidebar__submenu">
            <div>
              {children}
            </div>
          </ul>
        </Collapse>
      </div>
    );
  }
}
