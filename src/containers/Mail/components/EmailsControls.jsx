/* eslint-disable react/no-typos */
import React from 'react';
import {
  Button, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown,
} from 'reactstrap';
import PropTypes from 'prop-types';

import CheckIcon from 'mdi-react/CheckIcon';
import MenuDownIcon from 'mdi-react/MenuDownIcon';
import ReloadIcon from 'mdi-react/ReloadIcon';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import Pagination from '../../../shared/components/pagination/PaginationSmall';
import { EmailsProps } from '../../../shared/prop-types/EmailProps';

const EmailsControls = ({ emails, onChangePage, onChangeSelect }) => (
  <div className="inbox__emails-controls-wrap">
    <div className="inbox__emails-controls">
      <label className="checkbox-btn checkbox-btn--colored-click inbox__emails-control-checkbox" htmlFor="checkbox">
        <input id="checkbox" className="checkbox-btn__checkbox" type="checkbox" onChange={onChangeSelect} />
        <span className="checkbox-btn__checkbox-custom">
          <CheckIcon />
        </span>
      </label>
      <UncontrolledDropdown>
        <DropdownToggle className="icon icon--right" outline size="sm">
          <p>Filter By <MenuDownIcon /></p>
        </DropdownToggle>
        <DropdownMenu className="dropdown__menu">
          <DropdownItem>Name</DropdownItem>
          <DropdownItem>Date</DropdownItem>
          <DropdownItem>Favorite</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
      <Button outline className="icon inbox__emails-control-reload" size="sm" onClick={e => e.preventDefault()}>
        <ReloadIcon />
      </Button>
    </div>
    <div className="inbox__emails-controls-right">
      <div className="inbox__emails-control-search">
        <input placeholder="Search" />
        <div className="inbox__emails-control-search-icon"><MagnifyIcon /></div>
      </div>
      <Pagination items={emails} onChangePage={onChangePage} initialPage={1} />
    </div>
  </div>
);

EmailsControls.propTypes = {
  emails: EmailsProps.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeSelect: PropTypes.func.isRequired,
};

export default EmailsControls;
