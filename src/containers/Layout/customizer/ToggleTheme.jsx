import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ThemeProps } from '../../../shared/prop-types/ReducerProps';

class ToggleTheme extends PureComponent {
  static propTypes = {
    theme: ThemeProps.isRequired,
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
  };

  render() {
    const { theme, changeToLight, changeToDark } = this.props;

    return (
      <label className="toggle-btn customizer__toggle" htmlFor="theme_toggle">
        <input
          className="toggle-btn__input"
          type="checkbox"
          name="theme_toggle"
          id="theme_toggle"
          checked={theme.className === 'theme-dark'}
          onChange={theme.className === 'theme-dark' ? changeToLight : changeToDark}
        />
        <span className="toggle-btn__input-label" />
        <span>Dark Theme</span>
      </label>
    );
  }
}

export default ToggleTheme;
