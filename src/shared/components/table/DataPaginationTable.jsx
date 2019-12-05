/* eslint-disable consistent-return */
import React, { PureComponent } from 'react';
import ReactDataGrid from 'react-data-grid';
import PropTypes from 'prop-types';

export default class DataPaginationTable extends PureComponent {
  static propTypes = {
    heads: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      editable: PropTypes.bool,
      sortable: PropTypes.bool,
    })).isRequired,
    rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    onSorting: PropTypes.func.isRequired,
  };

  rowGetter = (i) => {
    const { rows } = this.props;
    return rows[i];
  };

  render() {
    const { heads, rows, onSorting } = this.props;

    return (
      <div className="table">
        <ReactDataGrid
          columns={heads}
          rowGetter={this.rowGetter}
          rowsCount={rows.length}
          rowHeight={44}
          minColumnWidth={100}
          onGridSort={onSorting}
        />
      </div>
    );
  }
}
