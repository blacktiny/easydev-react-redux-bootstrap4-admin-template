import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const ReduxForm = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Redux Form</h5>
      </div>
      <p>This template contains examples of <a href="https://redux-form.com/7.3.0/">redux form</a> in
        <b> template/src/pages/form/</b>.
      </p>
      <p>Stylesheet: <b>template/src/scss/components/form.scss</b></p>
      <p>The code of a basic form is below:</p>
      <CodeHighlither>
        {`import React, {PureComponent} from 'react';
import {Button, ButtonToolbar} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';

class Example extends PureComponent {
  render() {
    const {handleSubmit, reset} = this.props;
    
    return (
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Input Label</label>
          <div className='form__form-group-field'>
            <Field
              name='input'
              component='input'
              type='text'
              placeholder='...'
            />
          </div>
        </div>
        <ButtonToolbar className='form__button-toolbar'>
          <Button color='primary' type='submit'>Submit</Button>
          <Button type='button' onClick={reset}>
            Cancel
          </Button>
        </ButtonToolbar>
      </form>
    )
  }
}

export default reduxForm({
  form: 'example_form', // a unique identifier for this form
})(Example);`}
      </CodeHighlither>
      <p>You can add custom inputs with the following code:</p>
      <CodeHighlither>
        {`const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)`}
      </CodeHighlither>
      <p>And then use your custom input inside Field:</p>
      <CodeHighlither>
        {`<Field
  name='input'
  type='text'
  component={renderField}
  label='Input Label'
/>`}
      </CodeHighlither>
      <p>All documentation about redux-form you can read <a href="https://redux-form.com/7.3.0/examples/">here</a>.</p>
    </CardBody>
  </Card>
);

export default ReduxForm;
