import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {
  Button, ButtonToolbar, Modal,
} from 'reactstrap';
import PlusIcon from 'mdi-react/PlusIcon';
import classNames from 'classnames';
import DatePicker from 'react-datepicker';
import { ThemeProps } from '../../../shared/prop-types/ReducerProps';

const priorityOptions = [
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

const todoSidebarImg = `${process.env.PUBLIC_URL}/img/sidebar_img.svg`;

class TodoInput extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    togglePriorityFilter: PropTypes.func.isRequired,
    theme: ThemeProps.isRequired,
    rtl: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      priority: 'low',
      modal: false,
      startDate: new Date(),
    };

    this.toggle = this.toggle.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ modal: !prevState.modal }));
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handlePriorityChange(event) {
    this.setState({
      priority: event.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addTodo } = this.props;
    const { title, description, priority } = this.state;

    if (title !== '') {
      this.toggle();
      addTodo(title, description, priority);
      this.setState({
        title: '',
        description: '',
        priority: { value: 'low', label: 'Low' },
      });
    }
  }

  handlePriorityFilterChange(event) {
    const { togglePriorityFilter } = this.props;
    togglePriorityFilter(event.target.value);
  }

  handleDateChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    const {
      title, description, priority, modal, startDate,
    } = this.state;
    const { theme, rtl } = this.props;

    const modalClasses = classNames({
      'todo__add-modal': true,
    }, theme.className, `${rtl}-support`);

    return (
      <div className="todo__input-new">
        <div className="todo__sidebar">
          <img className="todo_sidebar-image" src={todoSidebarImg} alt="sidebar-img" />
          <Button className="todo__btn-add-new" onClick={this.toggle}><PlusIcon /> New task</Button>
          <div className="todo__date-filter">
            <p className="title">Status</p>
            <ul className="todo__date-filter-list">
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="all-tasks"
                  name="date-filter"
                  value="all-tasks"
                />
                <label htmlFor="all-tasks">All tasks</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="pedning-tasks"
                  name="date-filter"
                  value="pedning-tasks"
                />
                <label htmlFor="pedning-tasks">Pending tasks</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="completed-tasks"
                  name="date-filter"
                  value="completed-tasks"
                />
                <label htmlFor="completed-tasks">Completed tasks</label>
              </li>
            </ul>
          </div>
          <div className="todo__priority-filter">
            <p className="title">Priority</p>
            <ul className="todo__priority-filter-list">
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-all"
                  name="priority-filter"
                  value=""
                  onClick={this.handlePriorityFilterChange.bind(this)}
                  defaultChecked
                />
                <label htmlFor="priority-all">All</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-low"
                  name="priority-filter"
                  value="low"
                  onClick={this.handlePriorityFilterChange.bind(this)}
                />
                <label htmlFor="priority-low">Low</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-medium"
                  name="priority-filter"
                  value="medium"
                  onClick={this.handlePriorityFilterChange.bind(this)}
                />
                <label htmlFor="priority-medium">Medium</label>
              </li>
              <li>
                <input
                  className="todo__filter-radio"
                  type="radio"
                  id="priority-high"
                  name="priority-filter"
                  value="high"
                  onClick={this.handlePriorityFilterChange.bind(this)}
                />
                <label htmlFor="priority-high">High</label>
              </li>
            </ul>
          </div>
        </div>
        <Modal
          isOpen={modal}
          toggle={this.toggle}
          className={modalClasses}
        >
          <div className="form">
            <div className="form__form-group">
              <span className="form__form-group-label typography-message">Title</span>
              <div className="form__form-group-field">
                <input
                  type="text"
                  placeholder="title.."
                  required
                  value={title}
                  onChange={this.handleTitleChange.bind(this)}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <textarea
                  placeholder="what to do.."
                  required
                  value={description}
                  onChange={this.handleDescriptionChange.bind(this)}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Due Date</span>
              <div className="form__form-group-field priority">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={startDate}
                  onChange={this.handleDateChange}
                />
              </div>
            </div>

            <div className="form__form-group">
              <span className="form__form-group-label">Priority</span>
              <div className="form__form-group-field priority">
                <Select
                  options={priorityOptions}
                  onChange={this.handlePriorityChange}
                  defaultValue={priority}
                />
              </div>
            </div>


            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit" onClick={this.handleSubmit}>Add</Button>
              <Button type="button" onClick={this.toggle}>Cancel</Button>
            </ButtonToolbar>
          </div>
        </Modal>
      </div>
    );
  }
}
export default TodoInput;
