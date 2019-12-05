import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const ChangeColorThemes = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Change Color Theme</h5>
      </div>
      <p>We have created light and dark color theme for this template. All color variables are
            in <b>template/src/scss/settings/variables.scss</b> file. Both themes look like the following:
      </p>
      <CodeHighlither scss>
        {`$themes: (
  light: (
    colorBackground: white,
    colorBackgroundBody: #f2f4f7,
    colorText: #646777,
    colorTextAdditional: #646777,
    logoImg: url(../img/logo/logo-light.png),
    colorHover: #fafbfe,
    colorBorder: #eff1f5,
    colorIcon: #999999,
    imgInvert: invert(0%),
    colorFieldsBorder: #f2f4f7,
    colorBackgroundOpacity: rgba(0, 0, 0, 0.08),
    colorBackgroundInverse: #232329,
    colorBackgroundBodyInverse: #2a2a31,
    colorTextInverse: #dddddd,
    colorTextAdditionalInverse: #999999,
    colorHoverInverse: #38373f,
    colorBorderInverse: #333246,
    colorIconInverse: #605f7b,
    colorScrollbar: #B4BFD0
  ),
  dark: (...)
);`}
      </CodeHighlither>
      <p>You can change values of variables as you want and add new ones. {'Don\'t'} forget to add the same variable to
            both themes!
      </p>
      <p> If values of a variable are the same for all themes, you can write so outside of <b>$themes</b>:</p>
      <CodeHighlither scss>
        {`$color-accent: #4ce1b6;
$color-accent-hover: darken($color-accent, 10%);
$color-additional: #999999;
$color-additional-hover: darken($color-additional, 10%);`}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default ChangeColorThemes;
