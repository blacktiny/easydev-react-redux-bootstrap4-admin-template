import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SearchResult extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    preview: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    link: '',
    preview: '',
  };

  render() {
    const { title, link, preview } = this.props;

    return (
      <div className="search-result">
        <p className="search-result__title">{title}</p>
        <p className="search-result__link"><a href={link}>{link}</a></p>
        <p className="search-result__preview">{preview}</p>
      </div>
    );
  }
}
