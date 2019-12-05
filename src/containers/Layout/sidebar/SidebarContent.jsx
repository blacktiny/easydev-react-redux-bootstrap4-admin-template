import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToLight, changeToDark } = this.props;

    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Dashboard Default" icon="home" route="/dashboard_default" onClick={this.hideSidebar} />
          <SidebarLink
            title="Dashboard E-commerce"
            icon="store"
            route="/dashboard_e_commerce"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Dashboard Fitness"
            icon="heart-pulse"
            route="/dashboard_fitness"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Dashboard Crypto"
            icon="rocket"
            route="/dashboard_crypto"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Dashboard Booking"
            icon="apartment"
            newLink
            route="/dashboard_booking"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Dashboard MobileApp"
            icon="smartphone"
            newLink
            route="/dashboard_mobile_app"
            onClick={this.hideSidebar}
          />
          <SidebarCategory title="Layout" icon="layers">
            <button className="sidebar__link" type="button" onClick={changeToLight}>
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button className="sidebar__link" type="button" onClick={changeToDark}>
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
          <SidebarLink
            title="Log In"
            route="/log_in"
            icon="user"
            newLink
            onClick={this.hideSidebar}
          />
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="UI Elements" icon="diamond">
            <SidebarLink title="Alerts" route="/ui/alerts" onClick={this.hideSidebar} />
            <SidebarLink title="Buttons" route="/ui/buttons" onClick={this.hideSidebar} />
            <SidebarLink title="Carousel" route="/ui/carousel" onClick={this.hideSidebar} />
            <SidebarLink title="Collapse" route="/ui/collapse" onClick={this.hideSidebar} />
            <SidebarLink title="Grids" route="/ui/grids" onClick={this.hideSidebar} />
            <SidebarLink title="Modals" route="/ui/modals" onClick={this.hideSidebar} />
            <SidebarLink title="Notifications" route="/ui/notifications" onClick={this.hideSidebar} />
            <SidebarLink title="Panels" route="/ui/panels" onClick={this.hideSidebar} />
            <SidebarLink title="Progress Bars" route="/ui/progress_bars" onClick={this.hideSidebar} />
            <SidebarLink title="Range Sliders" route="/ui/range_sliders" onClick={this.hideSidebar} />
            <SidebarLink title="Tabs" route="/ui/tabs" onClick={this.hideSidebar} />
            <SidebarLink title="Timeline" route="/ui/timeline" onClick={this.hideSidebar} />
            <SidebarLink title="Tooltips & Popovers" route="/ui/tooltips" onClick={this.hideSidebar} />
            <SidebarLink title="Typography" route="/ui/typography" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarLink title="Mail Application" icon="envelope" route="/mail" onClick={this.hideSidebar} />
          <SidebarLink title="Chat Application" icon="bubble" route="/chat" onClick={this.hideSidebar} />
          <SidebarLink title="Todo Application" icon="book" newLink route="/todo" onClick={this.hideSidebar} />
          <SidebarCategory title="Forms" icon="file-add">
            <SidebarLink title="Basic Form" route="/forms/basic_form" onClick={this.hideSidebar} />
            <SidebarLink title="Check Form Controls" route="/forms/check_form_controls" onClick={this.hideSidebar} />
            <SidebarLink title="File Upload" route="/forms/file_upload" onClick={this.hideSidebar} />
            <SidebarLink title="Floating Labels Form" route="/forms/floating_labels_form" onClick={this.hideSidebar} />
            <SidebarLink title="Form Dropzone" route="/forms/form_dropzone" onClick={this.hideSidebar} />
            <SidebarLink title="Form Layouts" route="/forms/form_layouts" onClick={this.hideSidebar} />
            <SidebarLink title="Form Picker" route="/forms/form_picker" onClick={this.hideSidebar} />
            <SidebarLink title="Form Validation" route="/forms/form_validation" onClick={this.hideSidebar} />
            <SidebarLink title="Mask Form" route="/forms/mask_form" onClick={this.hideSidebar} />
            <SidebarLink title="Material Form" route="/forms/material_form" onClick={this.hideSidebar} />
            <SidebarLink title="Wizard Form" route="/forms/wizard_form" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Tables" icon="list" isNew>
            <SidebarLink title="Basic tables" route="/tables/basic_tables" onClick={this.hideSidebar} />
            <SidebarLink title="Data table" route="/tables/data_table" onClick={this.hideSidebar} />
            <SidebarLink title="Editable table" route="/tables/editable_table" onClick={this.hideSidebar} />
            <SidebarLink title="Material table" newLink route="/tables/material_table" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Charts" icon="chart-bars">
            <SidebarLink title="ChartsJS" route="/charts/charts_js" onClick={this.hideSidebar} />
            <SidebarLink title="React-vis" route="/charts/react_vis" onClick={this.hideSidebar} />
            <SidebarLink title="Recharts" route="/charts/recharts" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Maps" icon="map">
            <SidebarLink title="Google map" route="/maps/google_map" onClick={this.hideSidebar} />
            <SidebarLink title="Vector map" route="/maps/vector_map" onClick={this.hideSidebar} />
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Account" icon="user">
            <SidebarLink title="Email Confirmation" route="/account/email_confirmation" />
            <SidebarLink title="Lock Screen" route="/lock_screen" />
            <SidebarLink title="Log In Photo" route="/log_in_photo" />
            <SidebarLink title="Profile" route="/account/profile" onClick={this.hideSidebar} />
            <SidebarLink title="Register" route="/register" />
            <SidebarLink title="Register Photo" route="/register_photo" />
          </SidebarCategory>
          <SidebarCategory title="E-commerce" icon="cart">
            <SidebarLink title="Cart" route="/e-commerce/cart" onClick={this.hideSidebar} />
            <SidebarLink title="Catalog" route="/e-commerce/catalog" onClick={this.hideSidebar} />
            <SidebarLink title="Orders List" route="/e-commerce/orders_list" onClick={this.hideSidebar} />
            <SidebarLink title="Payment" route="/e-commerce/payment" onClick={this.hideSidebar} />
            <SidebarLink title="Product Edit" route="/e-commerce/product_edit" onClick={this.hideSidebar} />
            <SidebarLink title="Product Page" route="/e-commerce/product_page" onClick={this.hideSidebar} />
            <SidebarLink title="Products List" route="/e-commerce/products_list" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Default Pages" icon="file-empty">
            <SidebarLink title="404" route="/404" />
            <SidebarLink title="Calendar" route="/default_pages/calendar" onClick={this.hideSidebar} />
            <SidebarLink title="FAQs" route="/default_pages/faq" onClick={this.hideSidebar} />
            <SidebarLink title="Gallery" route="/default_pages/gallery" onClick={this.hideSidebar} />
            <SidebarLink title="Invoice template" route="/default_pages/invoice_template" onClick={this.hideSidebar} />
            <SidebarLink title="Pricing Cards" route="/default_pages/pricing_cards" onClick={this.hideSidebar} />
            <SidebarLink title="Project Summary" route="/default_pages/project_summary" onClick={this.hideSidebar} />
            <SidebarLink title="Search Results" route="/default_pages/search_results" onClick={this.hideSidebar} />
            <SidebarLink title="Text Editor" route="/default_pages/text_editor" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Multilevel Menu " icon="menu">
            <SidebarLink title="Second Level Item" />
            <SidebarCategory title="Second Level Item">
              <SidebarLink title="Third Level Item" />
              <SidebarLink title="Third Level Item" />
            </SidebarCategory>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" route="/log_in" />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink
            title="Documentation"
            icon="text-align-justify"
            route="/documentation/introduction"
            onClick={this.hideSidebar}
          />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
