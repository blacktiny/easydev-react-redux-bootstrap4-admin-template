import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import PropTypes from 'prop-types';
import range from 'lodash.range';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';

export default class CustPag extends React.Component {
  static propTypes = {
    onChangePage: PropTypes.func.isRequired,
    itemsCount: PropTypes.number.isRequired,
    itemsToShow: PropTypes.number.isRequired,
    pageOfItems: PropTypes.number.isRequired,
  };

  setPage = (page) => {
    const { itemsCount, itemsToShow, onChangePage } = this.props;

    // calculate total pages
    const totalPages = Math.ceil(itemsCount / itemsToShow);

    if (page < 1 || page > totalPages) {
      return;
    }

    // call change page function in parent component
    onChangePage(page);
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
    const { itemsCount, itemsToShow, pageOfItems } = this.props;

    const pages = [];
    for (let i = 1; i <= Math.ceil(itemsCount / itemsToShow); i += 1) {
      pages.push(i);
    }

    return itemsCount ? (
      <div className="pagination__wrap">
        {(itemsCount <= 1) ? ''
          : (
            <Pagination className="pagination" dir="ltr">
              <PaginationItem className="pagination__item" disabled={pageOfItems === 1}>
                <PaginationLink
                  className="pagination__link pagination__link--arrow"
                  type="button"
                  onClick={() => this.setPage(1)}
                >
                  <ChevronLeftIcon className="pagination__link-icon" />
                </PaginationLink>
              </PaginationItem>
              {pages.map(page => (
                <PaginationItem
                  className="pagination__item"
                  key={page}
                  active={pageOfItems === page}
                >
                  <PaginationLink
                    className="pagination__link"
                    type="button"
                    onClick={() => this.setPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))
          }
              <PaginationItem className="pagination__item" disabled={pageOfItems === pages.length}>
                <PaginationLink
                  className="pagination__link pagination__link--arrow"
                  type="button"
                  onClick={() => this.setPage(pages.length)}
                >
                  <ChevronRightIcon className="pagination__link-icon" />
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          )
          }
        <div className="pagination-info">
          <span>Showing {`${(itemsToShow * (pageOfItems - 1)) + 1} `}
              to {itemsToShow * pageOfItems > itemsCount ? itemsCount
            : itemsToShow * pageOfItems} of {itemsCount}
          </span>
        </div>
      </div>
    ) : <div />;
  }
}

/* eslint-enable */
