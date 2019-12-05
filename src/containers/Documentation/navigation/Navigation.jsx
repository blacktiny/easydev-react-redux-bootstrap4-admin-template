import React, { PureComponent } from 'react';
import { CardBody, Card } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Navigation extends PureComponent {
  static propTypes = {
    active: PropTypes.string,
    stick: PropTypes.bool,
    style: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    active: '',
    stick: false,
  };

  render() {
    const { style, stick, active } = this.props;
    return (
      <Card
        className="card--not-full-height documentation__nav-wrap"
        style={{ ...style, marginTop: stick ? '90px' : '0' }}
      >
        <CardBody>
          <Link
            to="/documentation/introduction"
            className={`documentation__nav-link${active === 'introduction'
              ? ' documentation__nav--active' : ''}`}
          >
              Introduction
          </Link>
          <Link
            to="/documentation/installation"
            className={`documentation__nav-link${active === 'installation'
              ? ' documentation__nav--active' : ''}`}
          >
              Installation
          </Link>
          <Link
            to="/documentation/file_structure"
            className={`documentation__nav-link${active === 'file_structure'
              ? ' documentation__nav--active' : ''}`}
          >
              File Structure
          </Link>
          <Link
            to="/documentation/components"
            className={`documentation__nav-link${active === 'components'
              ? ' documentation__nav--active' : ''}`}
          >
              Components
          </Link>
          <Link
            to="/documentation/form"
            className={`documentation__nav-link${active === 'form'
              ? ' documentation__nav--active' : ''}`}
          >
              Form
          </Link>
          <Link
            to="/documentation/color_themes"
            className={`documentation__nav-link${active === 'color_themes'
              ? ' documentation__nav--active' : ''}`}
          >
              Color Themes
          </Link>
          <Link
            to="/documentation/navigation_item"
            className={`documentation__nav-link${active === 'navigation_item'
              ? ' documentation__nav--active' : ''}`}
          >
              Navigation Item
          </Link>
          <Link
            to="/documentation/authentication"
            className={`documentation__nav-link${active === 'authentication'
              ? ' documentation__nav--active' : ''}`}
          >
            Authentication
          </Link>
          <Link
            to="/documentation/resources"
            className={`documentation__nav-link${active === 'resources'
              ? ' documentation__nav--active' : ''}`}
          >
              Resources
          </Link>
          <Link
            to="/documentation/changelog"
            className={`documentation__nav-link${active === 'changelog'
              ? ' documentation__nav--active' : ''}`}
          >
              Changelog
          </Link>
        </CardBody>
      </Card>
    );
  }
}
