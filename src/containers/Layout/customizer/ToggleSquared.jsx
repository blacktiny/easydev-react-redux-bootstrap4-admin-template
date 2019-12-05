import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CustomizerProps } from '../../../shared/prop-types/ReducerProps';

class ToggleSquared extends PureComponent {
  static propTypes = {
    customizer: CustomizerProps.isRequired,
    changeBorderRadius: PropTypes.func.isRequired,
  };

  render() {
    const { changeBorderRadius, customizer } = this.props;

    return (
      <label className="toggle-btn customizer__toggle" htmlFor="square_toggle">
        <input
          className="toggle-btn__input"
          type="checkbox"
          name="square_toggle"
          id="square_toggle"
          checked={customizer.squaredCorners}
          onChange={changeBorderRadius}
        />
        <span className="toggle-btn__input-label" />
        <span>Squared borders</span>
      </label>
    );
  }
}

export default ToggleSquared;
