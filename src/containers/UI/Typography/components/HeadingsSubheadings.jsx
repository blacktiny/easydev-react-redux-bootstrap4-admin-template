import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const HeadingsSubheadings = ({ t }) => (
  <Col md={12} lg={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.typography.heading_with_subheading')}</h5>
          <h5 className="subhead">Use tags <span className="red-text">h1 to h6</span> with class
            <span className="red-text"> subhead</span>
          </h5>
        </div>
        <div className="typography-card">
          <div className="typography--inline">
            <h1>H1 Type something </h1>
            <h1 className="subhead">Subheading</h1>
          </div>
          <div className="typography--inline">
            <h2>H2 Type something </h2>
            <h2 className="subhead">Subheading</h2>
          </div>
          <div className="typography--inline">
            <h3>H3 Type something </h3>
            <h3 className="subhead">Subheading</h3>
          </div>
          <div className="typography--inline">
            <h4>H4 Type something </h4>
            <h4 className="subhead">Subheading</h4>
          </div>
          <div className="typography--inline">
            <h5>H5 Type something </h5>
            <h5 className="subhead">Subheading</h5>
          </div>
          <div className="typography--inline">
            <h6>H6 Type something </h6>
            <h6 className="subhead">Subheading</h6>
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>
);

HeadingsSubheadings.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(HeadingsSubheadings);
