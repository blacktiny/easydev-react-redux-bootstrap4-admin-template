import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { StickyContainer, Sticky } from 'react-sticky';
import Navigation from '../navigation/Navigation';
import ReduxForm from './components/ReduxForm';
import Select from './components/Select';
import CheckBoxes from './components/CheckBoxes';
import RadioButtons from './components/RadioButtons';
import DatePicker from './components/DatePicker';
import TimePicker from './components/TimePicker';
import DropZones from './components/DropZones';
import ColorPickers from './components/ColorPickers';
import Material from './components/Material';
import NavigationBottom from '../navigation/NavigationBottom';

const FormDoc = () => (
  <Container className="documentation">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Form</h3>
      </Col>
    </Row>
    <StickyContainer>
      <Row className="documentation__main">
        <Col md={12} lg={3} xl={3} sm={12} xs={12} className="documentation__nav">
          <Sticky topOffset={-90} bottomOffset={95}>
            {({
              isSticky,
              style,
            }) => <Navigation active="form" style={style} stick={isSticky} />}
          </Sticky>
        </Col>
        <Col md={12} lg={9} xl={9} sm={12} xs={12}>
          <ReduxForm />
          <Material />
          <Select />
          <CheckBoxes />
          <RadioButtons />
          <DatePicker />
          <TimePicker />
          <DropZones />
          <ColorPickers />
        </Col>
      </Row>
    </StickyContainer>
    <NavigationBottom
      prevLink="/documentation/components"
      prevTitle="Components"
      nextLink="/documentation/color_themes"
      nextTitle="Color Themes"
    />
  </Container>
);

export default FormDoc;
