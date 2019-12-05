import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CustomizerProps } from '../../../shared/prop-types/ReducerProps';

class ToggleShadow extends PureComponent {
  static propTypes = {
    customizer: CustomizerProps.isRequired,
    toggleBoxShadow: PropTypes.func.isRequired,
  };

  render() {
    const { toggleBoxShadow, customizer } = this.props;

    return (
      <label className="toggle-btn customizer__toggle" htmlFor="shadow_toggle">
        <input
          className="toggle-btn__input"
          type="checkbox"
          name="shadow_toggle"
          id="shadow_toggle"
          checked={customizer.withBoxShadow}
          onChange={toggleBoxShadow}
        />
        <span className="toggle-btn__input-label" />
        <span>{'Block\'s Shadows'}</span>
      </label>
    );
  }
}

export default ToggleShadow;
