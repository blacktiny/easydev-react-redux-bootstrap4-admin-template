import React from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import {
  DropdownItem, DropdownToggle, DropdownMenu, UncontrolledDropdown,
} from 'reactstrap';
import TopbarNavLink from './TopbarNavLink';
import TopbarNavCategory from './TopbarNavCategory';

const TopbarNavOtherPages = () => (
  <UncontrolledDropdown className="topbar__nav-dropdown">
    <DropdownToggle className="topbar__nav-dropdown-toggle">
      Other pages <DownIcon />
    </DropdownToggle>
    <DropdownMenu className="topbar__nav-dropdown-menu dropdown__menu">
      <DropdownItem>
        <TopbarNavLink title="Mail Application" icon="envelope" route="/mail" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Chat Application" icon="bubble" route="/chat" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Todo Application" icon="book" route="/todo" />
      </DropdownItem>
      <DropdownItem>
        <TopbarNavCategory title="Forms" icon="file-add">
          <TopbarNavLink title="Basic Form" route="/forms/basic_form" />
          <TopbarNavLink title="Check Form Controls" route="/forms/check_form_controls" />
          <TopbarNavLink title="File Upload" route="/forms/file_upload" />
          <TopbarNavLink title="Floating Labels Form" route="/forms/floating_labels_form" />
          <TopbarNavLink title="Form Dropzone" route="/forms/form_dropzone" />
          <TopbarNavLink title="Form Layouts" route="/forms/form_layouts" />
          <TopbarNavLink title="Form Picker" route="/forms/form_picker" />
          <TopbarNavLink title="Form Validation" route="/forms/form_validation" />
          <TopbarNavLink title="Mask Form" route="/forms/mask_form" />
          <TopbarNavLink title="Material Form" route="/forms/material_form" />
          <TopbarNavLink title="Wizard Form" route="/forms/wizard_form" />
        </TopbarNavCategory>
      </DropdownItem>
      <DropdownItem>
        <TopbarNavCategory title="Tables" icon="list">
          <TopbarNavLink title="Basic tables" route="/tables/basic_tables" />
          <TopbarNavLink title="Data table" route="/tables/data_table" />
          <TopbarNavLink title="Editable table" route="/tables/editable_table" />
          <TopbarNavLink title="Material table" route="/tables/material_table" />
        </TopbarNavCategory>
      </DropdownItem>
      <DropdownItem>
        <TopbarNavCategory title="Charts" icon="chart-bars">
          <TopbarNavLink title="ChartsJS" route="/charts/charts_js" />
          <TopbarNavLink title="React-vis" route="/charts/react_vis" />
          <TopbarNavLink title="Recharts" route="/charts/recharts" />
        </TopbarNavCategory>
      </DropdownItem>
      <DropdownItem>
        <TopbarNavCategory title="Maps" icon="map">
          <TopbarNavLink title="Google map" route="/maps/google_map" />
          <TopbarNavLink title="Vector map" route="/maps/vector_map" />
        </TopbarNavCategory>
      </DropdownItem>
      <DropdownItem>
        <TopbarNavCategory title="Account" icon="user">
          <TopbarNavLink title="Email Confirmation" route="/account/email_confirmation" />
          <TopbarNavLink title="Lock Screen" route="/lock_screen" />
          <TopbarNavLink title="Log In" route="/log_in" />
          <TopbarNavLink title="Log In Photo" route="/log_in_photo" />
          <TopbarNavLink title="Profile" route="/account/profile" />
          <TopbarNavLink title="Register" route="/register" />
          <TopbarNavLink title="Register Photo" route="/register_photo" />
        </TopbarNavCategory>
      </DropdownItem>
      <DropdownItem>
        <TopbarNavCategory title="E-commerce" icon="cart">
          <TopbarNavLink title="Cart" route="/e-commerce/cart" />
          <TopbarNavLink title="Catalog" route="/e-commerce/catalog" />
          <TopbarNavLink title="Orders List" route="/e-commerce/orders_list" />
          <TopbarNavLink title="Payment" route="/e-commerce/payment" />
          <TopbarNavLink title="Product Edit" route="/e-commerce/product_edit" />
          <TopbarNavLink title="Product Page" route="/e-commerce/product_page" />
          <TopbarNavLink title="Products List" route="/e-commerce/products_list" />
        </TopbarNavCategory>
      </DropdownItem>
      <DropdownItem>
        <TopbarNavCategory title="Default Pages" icon="file-empty">
          <TopbarNavLink title="404" route="/404" />
          <TopbarNavLink title="Calendar" route="/default_pages/calendar" />
          <TopbarNavLink title="FAQs" route="/default_pages/faq" />
          <TopbarNavLink title="Gallery" route="/default_pages/gallery" />
          <TopbarNavLink title="Invoice template" route="/default_pages/invoice_template" />
          <TopbarNavLink title="Pricing Cards" route="/default_pages/pricing_cards" />
          <TopbarNavLink title="Project Summary" route="/default_pages/project_summary" />
          <TopbarNavLink title="Search Results" route="/default_pages/search_results" />
          <TopbarNavLink title="Text Editor" route="/default_pages/text_editor" />
        </TopbarNavCategory>
      </DropdownItem>
      <DropdownItem>
        <TopbarNavLink title="Log Out" icon="exit" route="/log_in" />
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export default TopbarNavOtherPages;
