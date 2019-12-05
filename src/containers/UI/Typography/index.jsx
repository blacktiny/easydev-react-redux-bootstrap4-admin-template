import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import HeadingsSubheadings from './components/HeadingsSubheadings';
import BasicHeadings from './components/BasicHeadings';
import BoldHeadings from './components/BoldHeadings';
import SampleText from './components/SampleText';
import SampleTextDescription from './components/SampleTextDescription';
import DefaultList from './components/DefaultList';
import SimpleIconsList from './components/SimpleIconsList';
import SimpleIconsListGreen from './components/SimpleIconsListGreen';
import NumerousList from './components/NumerousList';
import Blockquote from './components/Blockquote';
import Highlight from './components/Highlight';

const Typography = ({ t }) => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">{t('ui_elements.typography.title')}</h3>
        <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
              information
        </h3>
      </Col>
    </Row>
    <Row>
      <BasicHeadings />
      <HeadingsSubheadings />
      <BoldHeadings />
      <SampleText />
      <SampleTextDescription />
      <DefaultList />
      <SimpleIconsList />
      <SimpleIconsListGreen />
      <NumerousList />
      <Blockquote />
      <Highlight />
    </Row>
  </Container>
);

Typography.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Typography);
