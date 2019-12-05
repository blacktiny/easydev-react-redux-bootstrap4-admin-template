import React, { PureComponent } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
import range from 'lodash.range';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';

export default class PaginationSmallComponent extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.any).isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number.isRequired,
    pageSize: PropTypes.number,
  };

  static defaultProps = {
    pageSize: 1,
  };

  constructor(props) {
    super(props);
    this.state = { pager: {}, size: props.pageSize };
  }

  componentWillMount() {
    const { items, initialPage } = this.props;
    // set page if items array isn't empty
    if (items && items.length) {
      this.setPage(initialPage);
    }
  }

  componentDidUpdate(prevProps) {
    const { items, initialPage } = this.props;
    // reset page if items array has changed
    if (items !== prevProps.items) {
      this.setPage(initialPage);
    }
  }

  setPage = (page) => {
    const { items, onChangePage } = this.props;
    const { pager, size } = this.state;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    // get new pager object for specified page
    this.pager = this.getPager(items.length, page, size);

    // get new page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ pager: this.pager });

    // call change page function in parent component
    onChangePage(pageOfItems);
  };

  getPager = (totalItems, curPage, pSize) => {
    // default to first page
    const currentPage = curPage || 1;

    // default page size is 10
    const pageSize = pSize || 10;

    // calculate total pages
    const totalPages = Math.ceil(totalItems / pageSize);

    let startPage;
    let endPage;
    if (totalPages <= 10) {
      // less than 10 total pages so show all
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= 6) {
      // more than 10 total pages so calculate start and end pages
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min((startIndex + pageSize) - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = range(startPage, endPage + 1);

    // return object with all pager properties required by the view
    return {
      totalItems,
      currentPage,
      pageSize,
      totalPages,
      startPage,
      endPage,
      startIndex,
      endIndex,
      pages,
    };
  };

  render() {
    const { pager } = this;

    return (
      <div className="pagination__wrap pagination__wrap--small">
        {(!pager.pages || pager.pages.length <= 1) ? ''
          : (
            <Pagination className="pagination" dir="ltr">
              <PaginationItem className="pagination__item" disabled={pager.currentPage === 1}>
                <PaginationLink
                  className="pagination__link pagination__link--arrow"
                  type="button"
                  onClick={() => this.setPage(pager.currentPage - 1)}
                >
                  <ChevronLeftIcon className="pagination__link-icon" />
                </PaginationLink>
              </PaginationItem>
              <PaginationItem className="pagination__item" disabled={pager.currentPage === pager.totalPages}>
                <PaginationLink
                  className="pagination__link pagination__link--arrow"
                  type="button"
                  onClick={() => this.setPage(pager.currentPage + 1)}
                >
                  <ChevronRightIcon className="pagination__link-icon" />
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          )
        }
      </div>
    );
  }
}

/* eslint-enable */

// todo: rework it
