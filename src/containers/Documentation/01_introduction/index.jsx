import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import Navigation from '../navigation/Navigation';
import IntroductionFeatures from './components/IntroductionFeatures';
import NavigationBottom from '../navigation/NavigationBottom';

const Introduction = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Introduction</h3>
      </Col>
    </Row>
    <StickyContainer>
      <Row className="documentation__main">
        <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
          <Sticky topOffset={-90} bottomOffset={95}>
            {({
              isSticky,
              style,
            }) => <Navigation active="introduction" style={style} stick={isSticky} />}
          </Sticky>
        </Col>
        <Col md={12} lg={9} xl={9} sm={12} xs={12}>
          <IntroductionFeatures />
        </Col>
      </Row>
    </StickyContainer>
    <NavigationBottom nextLink="/documentation/installation" nextTitle="Installation" />
  </Container>
);

export default Introduction;
