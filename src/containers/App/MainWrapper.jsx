import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CustomizerProps, ThemeProps, RTLProps } from '../../shared/prop-types/ReducerProps';

class MainWrapper extends PureComponent {
  static propTypes = {
    customizer: CustomizerProps.isRequired,
    theme: ThemeProps.isRequired,
    rtl: RTLProps.isRequired,
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }).isRequired,
  };

  render() {
    const {
      theme, customizer, children, rtl, location,
    } = this.props;

    const wrapperClass = classNames({
      wrapper: true,
      'squared-corner-theme': customizer.squaredCorners,
      'blocks-with-shadow-theme': customizer.withBoxShadow,
      'top-navigation': customizer.topNavigation,
    });

    const direction = location.pathname === '/' ? 'ltr' : rtl.direction;

    return (
      <div className={`${theme.className} ${direction}-support`} dir={direction}>
        <div className={wrapperClass}>
          {children}
        </div>
      </div>
    );
  }
}

export default withRouter(connect(state => ({
  theme: state.theme,
  rtl: state.rtl,
  customizer: state.customizer,
}))(MainWrapper));
