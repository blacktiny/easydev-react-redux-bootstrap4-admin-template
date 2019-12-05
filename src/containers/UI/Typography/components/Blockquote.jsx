import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const Blockquote = ({ t }) => (
  <Col md={12} lg={6}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('ui_elements.typography.blockquote')}</h5>
          <h5 className="subhead">Use default <span className="red-text">blockquote</span></h5>
        </div>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </blockquote>
      </CardBody>
    </Card>
  </Col>
);

Blockquote.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Blockquote);
