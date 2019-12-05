import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import Navigation from '../navigation/Navigation';
import Alerts from './components/Alerts';
import Intro from './components/Intro';
import Buttons from './components/Buttons';
import Carousel from './components/Carousel';
import Collapse from './components/Collapse';
import Modals from './components/Modals';
import Panel from './components/Panel';
import ProgressBars from './components/ProgressBars';
import RangeSliders from './components/RangeSliders';
import Tabs from './components/Tabs';
import TimeLine from './components/TimeLine';
import Tooltips from './components/Tooltips';
import Popovers from './components/Popovers';
import NavigationBottom from '../navigation/NavigationBottom';

const Components = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Components</h3>
      </Col>
    </Row>
    <StickyContainer>
      <Row className="documentation__main">
        <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
          <Sticky topOffset={-90} bottomOffset={95}>
            {({
              isSticky,
              style,
            }) => <Navigation active="components" style={style} stick={isSticky} />}
          </Sticky>
        </Col>
        <Col md={12} lg={9} xl={9} sm={12} xs={12}>
          <Intro />
          <Alerts />
          <Buttons />
          <Carousel />
          <Collapse />
          <Modals />
          {/* <Notifications/> */}
          <Panel />
          <Popovers />
          <ProgressBars />
          <RangeSliders />
          <Tabs />
          <TimeLine />
          <Tooltips />
        </Col>
      </Row>
    </StickyContainer>
    <NavigationBottom
      prevLink="/documentation/file_structure"
      prevTitle="File Structure"
      nextLink="/documentation/form"
      nextTitle="Form"
    />
  </Container>
);

export default Components;
