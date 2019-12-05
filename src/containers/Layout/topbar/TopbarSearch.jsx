import React, { PureComponent } from 'react';
import SearchIcon from 'mdi-react/SearchIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import classNames from 'classnames';

export default class TopbarSearch extends PureComponent {
  constructor() {
    super();
    this.state = { inputOpen: false };
  }

  onInputOpen = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ inputOpen: !prevState.inputOpen }));
  };

  render() {
    const { inputOpen } = this.state;

    const searchClass = classNames({
      'topbar__search-field': true,
      'topbar__search-field--open': inputOpen,
    });

    return (
      <form className="topbar__search">
        <input placeholder="Search..." className={searchClass} />
        <button className="topbar__btn topbar__search-btn" type="button" onClick={this.onInputOpen}>
          {inputOpen ? <CloseIcon /> : <SearchIcon />}
        </button>
        {inputOpen && <button className="topbar__back" type="button" onClick={this.onInputOpen} />}
      </form>
    );
  }
}
