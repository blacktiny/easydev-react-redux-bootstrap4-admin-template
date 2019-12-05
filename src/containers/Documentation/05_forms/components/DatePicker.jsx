import React from 'react';
import { Card, CardBody } from 'reactstrap';
import CodeHighlither from '../../../../shared/components/CodeHighlither';

const DatePicker = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">Datepickers</h5>
      </div>
      <p>DatePickers are based on <a href="https://github.com/Hacker0x01/react-datepicker">react-datepicker</a>.
            The template has three types of datepickers.
      </p>
      <p>1. Simple datepicker</p>
      <CodeHighlither>
        {'import renderDatePickerField from \'../../../../components/form/DatePicker\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='date'
  component={renderDatePickerField}
/>`}
      </CodeHighlither>
      <p>2. Datepicker with choosing time</p>
      <CodeHighlither>
        {'import renderDateTimePickerField from \'../../../../components/form/DateTimePicker\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='date_with_time'
  component={renderDateTimePickerField}
/>`}
      </CodeHighlither>
      <p>3. Datepicker with choosing interval</p>
      <CodeHighlither>
        {'import renderIntervalDatePickerField from \'../../../../components/form/IntervalDatePicker\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='interval_date'
  component={renderIntervalDatePickerField}
/>`}
      </CodeHighlither>
      <p>Stylesheet: <b>template/src/scss/components/date-picker.scss</b></p>
    </CardBody>
  </Card>
);

export default DatePicker;
