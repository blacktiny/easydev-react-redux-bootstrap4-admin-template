import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Calendar from '../../../DefaultPage/Calendar/index';
import FAQ from '../../../DefaultPage/Faq/index';
import Gallery from '../../../DefaultPage/Gallery/index';
import PricingCards from '../../../DefaultPage/PricingCards/index';
import TextEditor from '../../../DefaultPage/TextEditor/index';
import InvoiceTemplate from '../../../DefaultPage/InvoiceTemplate/index';
import SearchResults from '../../../DefaultPage/SearchResults/index';
import ProjectSummary from '../../../DefaultPage/ProjectSummary/index';

export default () => (
  <Switch>
    <Route path="/default_pages/calendar" component={Calendar} />
    <Route path="/default_pages/faq" component={FAQ} />
    <Route path="/default_pages/gallery" component={Gallery} />
    <Route path="/default_pages/invoice_template" component={InvoiceTemplate} />
    <Route path="/default_pages/pricing_cards" component={PricingCards} />
    <Route path="/default_pages/project_summary" component={ProjectSummary} />
    <Route path="/default_pages/search_results" component={SearchResults} />
    <Route path="/default_pages/text_editor" component={TextEditor} />
  </Switch>
);
