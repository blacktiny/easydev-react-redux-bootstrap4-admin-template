import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const SampleTextDescription = ({ t }) => (
  <Col md={12} lg={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.typography.sample_text_with_description')}</h5>
        </div>
        <h4 className="bold-text">This is a sample heading for text part. </h4>
        <h4 className="subhead typography-message">
          Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
              penatibus.
        </h4>
        <p className="typography-message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis
              ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In
              sed ornare nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula
              ut id elit.
        </p>
      </CardBody>
    </Card>
  </Col>
);

SampleTextDescription.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(SampleTextDescription);
