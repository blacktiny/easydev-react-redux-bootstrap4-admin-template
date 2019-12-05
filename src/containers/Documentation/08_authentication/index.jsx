import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import Navigation from '../navigation/Navigation';
import NavigationBottom from '../navigation/NavigationBottom';
import FireBase from './components/Firebase';
import Auth0 from './components/Auth0';
import AuthGoogleAndFb from './components/AuthGoogleAndFb';

const NavigationItem = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Authentication</h3>
      </Col>
    </Row>
    <StickyContainer>
      <Row className="documentation__main">
        <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
          <Sticky topOffset={-90} bottomOffset={95}>
            {({
              isSticky,
              style,
            }) => <Navigation active="authentication" style={style} stick={isSticky} />}
          </Sticky>
        </Col>
        <Col md={12} lg={9} xl={9} sm={12} xs={12}>
          <Auth0 />
          <AuthGoogleAndFb />
          <FireBase />
        </Col>
      </Row>
    </StickyContainer>
    <NavigationBottom
      prevLink="/documentation/navigation_item"
      prevTitle="Navigation Item"
      nextLink="/documentation/resources"
      nextTitle="Resources"
    />
  </Container>
);

export default NavigationItem;
