import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const icon = `${process.env.PUBLIC_URL}/img/burger.svg`;

class TopbarSidebarButton extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility } = this.props;

    return (
      <div>
        <button className="topbar__button topbar__button--mobile" type="button" onClick={changeMobileSidebarVisibility}>
          <img src={icon} alt="" className="topbar__button-icon" />
        </button>
      </div>
    );
  }
}

export default TopbarSidebarButton;
