import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FilterListIcon from 'mdi-react/FilterListIcon';

class MatTableFilterButton extends React.Component {
  static propTypes = {
    onRequestSort: PropTypes.func.isRequired,
  };

  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSort = property => (event) => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
    this.handleClose();
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          className="material-table__toolbar-button"
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <FilterListIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          className="material-table__filter-menu"
        >
          <MenuItem onClick={this.handleSort('name')} className="material-table__filter-menu-item">Name</MenuItem>
          <MenuItem onClick={this.handleSort('calories')} className="material-table__filter-menu-item">
            Calories
          </MenuItem>
          <MenuItem onClick={this.handleSort('fat')} className="material-table__filter-menu-item">Fat</MenuItem>
          <MenuItem onClick={this.handleSort('carbs')} className="material-table__filter-menu-item">Carbs</MenuItem>
          <MenuItem onClick={this.handleSort('protein')} className="material-table__filter-menu-item">Protein</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default MatTableFilterButton;
