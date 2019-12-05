import React from 'react';
import { Card, CardBody } from 'reactstrap';

const Structure = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Project Structure</h5>
      </div>
      <p>EasyDEV has two projects:</p>
      <p><b>/template/...</b> - contains all components and pages which you can to find
        <a href="http://previews.aspirity.com/easydev/" target="_blank" rel="noopener noreferrer"> here</a>:
      </p>
      <pre className="documentation__structure">
        <code>
          {`easydev/
|——template
|  |——config/
|  |——public/
|  |  |——img/
|  |  |——fav.ico
|  |  |——index.html
|  |——src/
|  |  |——containers/
|  |  |    |——Account/          --lock screens, log in, register, profile
|  |  |    |——App/              --App.js, Router.js
|  |  |    |——Charts/           --pages with different charts
|  |  |    |——Dashboards/       --default, e-commerce, fitness
|  |  |    |——DefaultPages/     --calendar, gallery, chat, etc.
|  |  |    |——Documentation/    --documentation of the template
|  |  |    |——ECommerce/        --cart, catalog, product page, etc.
|  |  |    |——Form/             --redux-form, materiual-ui-next
|  |  |    |——Landing/
|  |  |    |——Layout/           --topbar, sidebar
|  |  |    |——Mail/             --inbox page
|  |  |    |——Maps/             --google map, highmap
|  |  |    |——Tables/           --bootstrap tables, data tables, material table
|  |  |    |——UI/               --ui elements
|  |  |——redux/
|  |  |    |——actions/
|  |  |    |——reducers/
|  |  |——scss/                   --styles
|  |  |——shared/
|  |  |    |——components/
|  |  |    |——imgs/
|  |  |    |——prop-types/
|  |  |——translations/
|  |  |——index.js
|  |——package.json
|  |——package-lock.json
`}
        </code>
      </pre>
      <p><b>/seed/...</b> - contains main components and examples of pages:</p>
      <pre className="documentation__structure">
        <code>
          {`easydev/
|——seed
|  |——config/
|  |——public/
|  |  |——img/
|  |  |——fav.ico
|  |  |——index.html
|  |——src/
|  |  |——pages/
|  |  |    |——App/              --App.js, Router.js
|  |  |    |——Example/          --example of page
|  |  |    |——ExampleTwo/       --example of page
|  |  |    |——Layout/           --topbar, sidebar
|  |  |    |——UI/               --example of log in page
|  |  |——redux/
|  |  |    |——actions/
|  |  |    |——reducers/
|  |  |——scss/                   --styles
|  |  |——shared/
|  |  |    |——components/
|  |  |    |——img/
|  |  |    |——prop-types/
|  |  |——index.js
|  |——package.json
|  |——package-lock.json
`}
        </code>
      </pre>
      <p>
        In v.1.4.0 was added <b>seed-without-redux</b>. It has the same structure as the other seed,
        except redux and redux-form.
      </p>
    </CardBody>
  </Card>
);

export default Structure;
