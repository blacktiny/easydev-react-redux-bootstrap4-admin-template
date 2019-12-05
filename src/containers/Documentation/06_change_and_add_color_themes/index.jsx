import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import Navigation from '../navigation/Navigation';
import ChangeColorThemes from './components/ChangeColorThemes';
import AddColorThemes from './components/AddColorThemes';
import UseColorTheme from './components/UseColorTheme';
import NavigationBottom from '../navigation/NavigationBottom';

const ColorThemes = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Color Themes</h3>
      </Col>
    </Row>
    <StickyContainer>
      <Row className="documentation__main">
        <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
          <Sticky topOffset={-90} bottomOffset={95}>
            {({
              isSticky,
              style,
            }) => <Navigation active="color_themes" style={style} stick={isSticky} />}
          </Sticky>
        </Col>
        <Col md={12} lg={9} xl={9} sm={12} xs={12}>
          <ChangeColorThemes />
          <AddColorThemes />
          <UseColorTheme />
        </Col>
      </Row>
    </StickyContainer>
    <NavigationBottom
      prevLink="/documentation/form"
      prevTitle="Form"
      nextLink="/documentation/navigation_item"
      nextTitle="Navigation Item"
    />
  </Container>
);

export default ColorThemes;
