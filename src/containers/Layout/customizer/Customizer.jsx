import React, { PureComponent } from 'react';
import classNames from 'classnames';
import CloseIcon from 'mdi-react/CloseIcon';
import PropTypes from 'prop-types';
import {
  CustomizerProps, SidebarProps, ThemeProps, RTLProps,
} from '../../../shared/prop-types/ReducerProps';
import ToggleTheme from './ToggleTheme';
import ToggleCollapsedMenu from './ToggleCollapsedMenu';
import ToggleSquared from './ToggleSquared';
import ToggleShadow from './ToggleShadow';
import ToggleTopMenu from './ToggleTopMenu';
import ToggleRTL from './ToggleRTL';

const settings = `${process.env.PUBLIC_URL}/img/settings.svg`;


export default class Customizer extends PureComponent {
  static propTypes = {
    sidebar: SidebarProps.isRequired,
    customizer: CustomizerProps.isRequired,
    theme: ThemeProps.isRequired,
    rtl: RTLProps.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
    toggleTopNavigation: PropTypes.func.isRequired,
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    changeToRTL: PropTypes.func.isRequired,
    changeToLTR: PropTypes.func.isRequired,
    changeBorderRadius: PropTypes.func.isRequired,
    toggleBoxShadow: PropTypes.func.isRequired,
  };

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { open } = this.state;
    const customizerClass = classNames({
      customizer__wrap: true,
      'customizer__wrap--open': open,
    });

    const {
      changeSidebarVisibility,
      sidebar,
      customizer,
      theme,
      rtl,
      toggleTopNavigation,
      changeToDark,
      changeToLight,
      changeToRTL,
      changeToLTR,
      changeBorderRadius,
      toggleBoxShadow,
    } = this.props;

    return (
      <div className="customizer">
        <button className="customizer__btn" type="button" onClick={this.handleOpen}>
          <img className="customizer__btn-icon" src={settings} alt="icon" />
        </button>
        <div className={customizerClass} hidden={!open}>
          <div className="customizer__title-wrap">
            <h5>Theme Customizer</h5>
            <button className="customizer__close-btn" type="button" onClick={this.handleOpen}>
              <CloseIcon />
            </button>
          </div>
          <p className="customizer__caption">This customizer allows you to see the different variations of the EasyDev.
            Create your own visual style for every project you do!
          </p>
          <ToggleCollapsedMenu changeSidebarVisibility={changeSidebarVisibility} sidebar={sidebar} />
          <ToggleTopMenu toggleTopNavigation={toggleTopNavigation} customizer={customizer} />
          <ToggleTheme changeToDark={changeToDark} changeToLight={changeToLight} theme={theme} />
          <ToggleSquared customizer={customizer} changeBorderRadius={changeBorderRadius} />
          <ToggleShadow customizer={customizer} toggleBoxShadow={toggleBoxShadow} />
          <ToggleRTL customizer={customizer} changeToRTL={changeToRTL} changeToLTR={changeToLTR} rtl={rtl} />
        </div>
      </div>
    );
  }
}
