import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CustomizerProps } from '../../../shared/prop-types/ReducerProps';

class ToggleTopMenu extends PureComponent {
  static propTypes = {
    customizer: CustomizerProps.isRequired,
    toggleTopNavigation: PropTypes.func.isRequired,
  };

  render() {
    const { toggleTopNavigation, customizer } = this.props;

    return (
      <label className="toggle-btn customizer__toggle" htmlFor="top_menu_toggle">
        <input
          className="toggle-btn__input"
          type="checkbox"
          name="top_menu_toggle"
          id="top_menu_toggle"
          checked={customizer.topNavigation}
          onChange={toggleTopNavigation}
        />
        <span className="toggle-btn__input-label" />
        <span>Top Menu</span>
      </label>
    );
  }
}

export default ToggleTopMenu;
