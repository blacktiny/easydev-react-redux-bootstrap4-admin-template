import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';

import moment from 'moment';

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

export default class CalendarComponent extends PureComponent {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      allDay: PropTypes.bool,
      start: PropTypes.instanceOf(Date),
      end: PropTypes.instanceOf(Date),
      priority: PropTypes.string,
    })).isRequired,
    small: PropTypes.bool,
    dir: PropTypes.string.isRequired,
  };

  static defaultProps = {
    small: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      events: props.events,
    };
  }

  moveEvent = ({ event, start, end }) => {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents,
    });
  };

  eventStyleGetter = (event) => {
    let color;

    switch (event.priority) {
      case 'high':
        color = '#fa697d';
        break;

      case 'family':
        color = '#4ce1b6';
        break;

      case 'non':
        color = '#70bbfd';
        break;
      default:
        color = '$color-additional';
        break;
    }

    const style = {
      backgroundColor: color,
      border: 'none',
    };

    return {
      style,
    };
  };

  render() {
    const { small, events, dir } = this.props;
    const formats = {
      dayFormat: (date, culture) => localizer.format(date, 'DD', culture),
    };
    return (
      <div className={`calendar${small ? ' calendar--small' : ''}`}>
        <DragAndDropCalendar
          rtl={dir === 'rtl'}
          localizer={localizer}
          events={events}
          views={['month', 'week', 'day']}
          popup
          formats={formats}
          step={60}
          timeslots={1}
          showMultiDayTimes
          onEventDrop={this.moveEvent}
          defaultDate={new Date(2018, 3, 1)}
          eventPropGetter={(this.eventStyleGetter)}
          messages={{
            previous: <span className="lnr lnr-chevron-left" />,
            next: <span className="lnr lnr-chevron-right" />,
            today: <span className="lnr lnr-calendar-full" />,
          }}
        />
      </div>
    );
  }
}
