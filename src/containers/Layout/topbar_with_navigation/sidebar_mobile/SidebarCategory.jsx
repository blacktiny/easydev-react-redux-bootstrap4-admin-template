import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { RTLProps } from '../../../../shared/prop-types/ReducerProps';

class SidebarCategory extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    rtl: RTLProps.isRequired,
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
      title, icon, isNew, children, rtl,
    } = this.props;
    const { collapse } = this.state;
    const categoryClass = classNames({
      'sidebar__category-wrap': true,
      'sidebar__category-wrap--open': collapse,
    });

    return (
      <div className={categoryClass}>
        <button className="sidebar__link sidebar__category" type="button" onClick={this.toggle}>
          {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
          <p className="sidebar__link-title">{title}
            {isNew && <span className="sidebar__category-new" />}
          </p>
          <span className={`sidebar__category-icon lnr lnr-chevron-${rtl.direction === 'rtl' ? 'left' : 'right'}`} />
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

export default connect(state => ({
  rtl: state.rtl,
}))(SidebarCategory);
