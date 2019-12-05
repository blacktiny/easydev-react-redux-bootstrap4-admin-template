import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import { RTLProps } from '../../../shared/prop-types/ReducerProps';

const NavigationBottom = ({
  prevLink, prevTitle, nextLink, nextTitle, rtl,
}) => (
  <div className="documentation__nav-bottom">
    <div className="documentation__nav-bottom-left">
      {prevLink
        ? (
          <Link to={prevLink}>
            {rtl.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}<p>{prevTitle}</p>
          </Link>
        ) : ''}
    </div>
    <div className="documentation__nav-bottom-right">
      {nextLink
        ? (
          <Link to={nextLink}>
            <p>{nextTitle}</p>{rtl.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Link>
        ) : ''}
    </div>
  </div>
);

NavigationBottom.propTypes = {
  rtl: RTLProps.isRequired,
  prevLink: PropTypes.string,
  prevTitle: PropTypes.string,
  nextLink: PropTypes.string,
  nextTitle: PropTypes.string,
};

NavigationBottom.defaultProps = {
  prevLink: '',
  prevTitle: '',
  nextLink: '',
  nextTitle: '',
};

export default connect(state => ({
  rtl: state.rtl,
}))(NavigationBottom);
