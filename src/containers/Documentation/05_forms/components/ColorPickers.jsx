import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const ColorPickers = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Color Pickers</h5>
      </div>
      <p>ColorPickers are based on <a href="https://github.com/casesandberg/react-color/">react-color</a>.
            There are three types of these pickers: sketch, block and chrome. Example of using one of them:
      </p>
      <CodeHighlither>
        {`import renderBlockColorPickerField from '../../../../components/form/BlockColorPicker';
import renderSketchColorPickerField from '../../../../components/form/SketchColorPicker';
import renderChromeColorPickerField from '../../../../components/form/ChromeColorPicker';`}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='sketch_color'
  component={renderSketchColorPickerField}
/>`}
      </CodeHighlither>
      <p>You can find other types of color pickers <a href="http://casesandberg.github.io/react-color/">here </a>
            and create your own in this template.
      </p>
      <p>Stylesheet: <b>template/src/scss/components/color-picker.scss</b></p>
    </CardBody>
  </Card>
);

export default ColorPickers;
