import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const Material = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Material</h5>
      </div>
      <p>You can combine redux-form with material-ui. Material UI documentation can be found
        <a href="https://material-ui-next.com/Material.jsx"> here</a>. This is an example of using a TextField:
      </p>
      <CodeHighlither>
        {`import TextField from 'material-ui/TextField';

const renderTextField = ({input, label, meta: {touched, error}, children, select}) => (
  <TextField
    className='material-form__field'
    label={label}
    error={touched && error}
    value={input.value}
    children={children}
    select={select}
    labelClassName='material-form__label'
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);`}
      </CodeHighlither>
      <p>Stylesheet: <b>template/src/scss/components/material-form.scss</b></p>
    </CardBody>
  </Card>
);

export default Material;
