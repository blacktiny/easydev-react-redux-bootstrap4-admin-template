import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const AddColorThemes = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Add Color Theme</h5>
      </div>
      <p>To add new color theme you need to add its title and copy all variables from one of the predefined themes
            and change their values as needed:
      </p>
      <CodeHighlither scss>
        {`$themes: (
  light: (...),
  dark: (...),
  title_of_new_theme: (
    // copy variables from one of themes and change their values
  )
);`}
      </CodeHighlither>
      <p>To change color theme in template you need to add new action
            in <b>template/src/redux/actions/themeActions.js:</b>
      </p>
      <CodeHighlither>
        {`export const CHANGE_THEME_TO_DARK = 'CHANGE_THEME_TO_DARK';
export const CHANGE_THEME_TO_LIGHT = 'CHANGE_THEME_TO_LIGHT';
// add new const

export function changeThemeToDark() {
  return {
    type: CHANGE_THEME_TO_DARK
  };
}

export function changeThemeToLight() {
  return {
    type: CHANGE_THEME_TO_LIGHT
  };
}

//add new function`}
      </CodeHighlither>
      <p>And add new case in <b>template/src/redux/actions/themeReducer.js:</b></p>
      <CodeHighlither>
        {`import {
  CHANGE_THEME_TO_DARK,
  CHANGE_THEME_TO_LIGHT
  // import new const
} from '../actions/themeActions';

const initialState = {
  className: 'theme-light'
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME_TO_DARK:
      return {className: 'theme-dark'};
    case CHANGE_THEME_TO_LIGHT:
      return {className: 'theme-light'};
    // add new case
    default:
      return state;
  }
}`}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default AddColorThemes;
